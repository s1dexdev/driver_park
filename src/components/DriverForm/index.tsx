import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { addDriverRequest } from '../../redux/drivers/actions';
import { statusesSelector } from '../../redux/drivers/selectors';
import styles from './DriverForm.module.scss';

interface IFormData {
    first_name: string;
    last_name: string;
    date_birth: string;
    status: string;
}

interface IStatus {
    title: string;
    code: string;
}

export function DriverForm(): JSX.Element {
    const dispatch = useDispatch();
    const statuses = useSelector(statusesSelector);

    const getFullDriverStatus = (status: string) => {
        return statuses.reduce((acc: IStatus, { title, code }) => {
            if (code === status) {
                acc.title = title;
                acc.code = code;
            }

            return acc;
        });
    };

    const addDriver = (data: IFormData) => {
        const driver = {
            first_name: data.first_name,
            last_name: data.last_name,
            date_birth: Date.parse(data.date_birth),
            status: getFullDriverStatus(data.status),
        };

        dispatch(addDriverRequest(driver));
    };

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            date_birth: '',
            status: '',
        },
        onSubmit: values => {
            addDriver(values);
        },
    });

    return (
        <form
            className={styles.form}
            name="addDriver_form"
            autoComplete="off"
            onSubmit={formik.handleSubmit}
        >
            <b className={styles.form__title}>Enter driver details</b>
            <div className={styles.form__fieldWrapper}>
                <label className={styles.form__field}>
                    <input
                        className={styles.form__inputText}
                        type="text"
                        name="first_name"
                        placeholder=" "
                        onChange={formik.handleChange}
                        value={formik.values.first_name}
                    ></input>
                    <span className={styles.form__descriptionInput}>
                        First name
                    </span>
                </label>
                <label className={styles.form__field}>
                    <input
                        className={styles.form__inputText}
                        type="text"
                        name="last_name"
                        placeholder=" "
                        onChange={formik.handleChange}
                        value={formik.values.last_name}
                    ></input>
                    <span className={styles.form__descriptionInput}>
                        Last name
                    </span>
                </label>
                <label className={styles.form__field}>
                    <input
                        type="date"
                        name="date_birth"
                        min="1970-01-01"
                        max="2004-01-01"
                        onChange={formik.handleChange}
                        value={formik.values.date_birth}
                    ></input>
                </label>
                <label className={styles.form__field}>
                    <select
                        name="status"
                        onChange={formik.handleChange}
                        value={formik.values.status}
                    >
                        <option value="" label="Select status" />
                        {statuses.map(({ title, code }) => (
                            <option key={code} value={code}>
                                {title}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <button type="submit">Add</button>
        </form>
    );
}
