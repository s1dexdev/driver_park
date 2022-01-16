import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Translate } from '../../../lang';
import { addDriverRequest } from '../../../redux/drivers/actions';
import { statusesSelector } from '../../../redux/drivers/selectors';
import styles from '../Form.module.scss';
import { Status } from '../../../interfaces';

interface IFormData {
    first_name: string;
    last_name: string;
    date_birth: string;
    status: string;
}

export function DriverForm(): JSX.Element {
    const dispatch = useDispatch();
    const statuses = useSelector(statusesSelector);

    const getFullDriverStatus = (status: string) => {
        return statuses.reduce((acc: Status, { title, code }) => {
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
            <b className={styles.form__title}>{Translate('driverDetails')}</b>
            <div className={styles.form__fieldWrapper}>
                <label className={styles.form__field}>
                    <input
                        className={styles.form__inputText}
                        type="text"
                        name="first_name"
                        placeholder=" "
                        pattern="[A-ZА-Я]{1}[a-zа-я]{1,15}"
                        onChange={formik.handleChange}
                        value={formik.values.first_name}
                    />
                    <span className={styles.form__descriptionInput}>
                        {Translate('firstName')}
                    </span>
                </label>
                <label className={styles.form__field}>
                    <input
                        className={styles.form__inputText}
                        type="text"
                        name="last_name"
                        placeholder=" "
                        pattern="[A-ZА-Я]{1}[a-zа-я]{1,15}"
                        onChange={formik.handleChange}
                        value={formik.values.last_name}
                    />
                    <span className={styles.form__descriptionInput}>
                        {Translate('lastName')}
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
                    />
                </label>
                <label className={styles.form__field}>
                    <select
                        name="status"
                        required
                        onChange={formik.handleChange}
                        value={formik.values.status}
                    >
                        <FormattedMessage id={'selectStatus'}>
                            {id => <option value="" label={`${id}`} />}
                        </FormattedMessage>

                        {statuses.map(({ code }) => (
                            <FormattedMessage key={code} id={code}>
                                {id => (
                                    <option key={code} value={code}>
                                        {id}
                                    </option>
                                )}
                            </FormattedMessage>
                        ))}
                    </select>
                </label>
            </div>
            <button type="submit">{Translate('add')}</button>
        </form>
    );
}
