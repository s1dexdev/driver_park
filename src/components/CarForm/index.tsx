import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { addCarRequest } from '../../redux/cars/actions';
import { statusesSelector } from '../../redux/cars/selectors';
import styles from './CarForm.module.scss';

interface IFormData {
    model: string;
    mark: string;
    year: string;
    number: string;
    driver_id: string;
    status: string;
}

interface IStatus {
    title: string;
    code: string;
}

export function CarForm(): JSX.Element {
    const dispatch = useDispatch();
    const statuses = useSelector(statusesSelector);

    const getFullCarStatus = (status: string) => {
        return statuses.reduce((acc: IStatus, { title, code }) => {
            if (code === status) {
                acc.title = title;
                acc.code = code;
            }

            return acc;
        });
    };

    const addCar = (data: IFormData) => {
        const car = {
            model: data.model,
            mark: data.mark,
            year: data.year,
            number: data.number,
            driver_id: data.driver_id,
            status: getFullCarStatus(data.status),
        };

        dispatch(addCarRequest(car));
    };

    const formik = useFormik({
        initialValues: {
            model: '',
            mark: '',
            year: '',
            number: '',
            driver_id: '',
            status: '',
        },
        onSubmit: values => {
            addCar(values);
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
                        name="model"
                        placeholder=" "
                        onChange={formik.handleChange}
                        value={formik.values.model}
                    ></input>
                    <span className={styles.form__descriptionInput}>Model</span>
                </label>
                <label className={styles.form__field}>
                    <input
                        className={styles.form__inputText}
                        type="text"
                        name="mark"
                        placeholder=" "
                        onChange={formik.handleChange}
                        value={formik.values.mark}
                    ></input>
                    <span className={styles.form__descriptionInput}>Mark</span>
                </label>
                <label className={styles.form__field}>
                    <input
                        className={styles.form__inputText}
                        type="number"
                        name="year"
                        min="1970"
                        max="2022"
                        placeholder=" "
                        onChange={formik.handleChange}
                        value={formik.values.year}
                    ></input>
                    <span className={styles.form__descriptionInput}>Year</span>
                </label>
                <label className={styles.form__field}>
                    <input
                        className={styles.form__inputText}
                        type="text"
                        name="number"
                        placeholder=" "
                        onChange={formik.handleChange}
                        value={formik.values.number}
                    ></input>
                    <span className={styles.form__descriptionInput}>
                        Number
                    </span>
                </label>
                <label className={styles.form__field}>
                    <input
                        className={styles.form__inputText}
                        type="number"
                        name="driver_id"
                        min="0"
                        placeholder=" "
                        onChange={formik.handleChange}
                        value={formik.values.driver_id}
                    ></input>
                    <span className={styles.form__descriptionInput}>
                        Driver id
                    </span>
                </label>
                <label className={styles.form__field}>
                    <select
                        name="status"
                        onChange={formik.handleChange}
                        value={formik.values.status}
                    >
                        <option value="" label="Select status" />
                        {statuses.map(({ title, code }, index) => (
                            <option key={index} value={code}>
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
