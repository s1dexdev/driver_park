import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Translate } from '../../../lang';
import { addCarRequest } from '../../../redux/cars/actions';
import { statusesSelector } from '../../../redux/cars/selectors';
import styles from '../Form.module.scss';
import { Status } from '../../../types';

interface FormData {
    model: string;
    mark: string;
    year: string;
    number: string;
    status: string;
}

export function CarForm({ id }: { id: number }): JSX.Element {
    const dispatch = useDispatch();
    const statuses = useSelector(statusesSelector);

    const getFullCarStatus = (status: string) => {
        return statuses.reduce((acc: Status, { title, code }) => {
            if (code === status) {
                acc.title = title;
                acc.code = code;
            }

            return acc;
        });
    };

    const addCar = (data: FormData) => {
        const car = {
            model: data.model,
            mark: data.mark,
            year: data.year,
            number: data.number,
            driver_id: id,
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
            <b className={styles.form__title}>{Translate('carDetails')}</b>
            <div className={styles.form__fieldWrapper}>
                <label className={styles.form__field}>
                    <input
                        className={styles.form__inputText}
                        type="text"
                        name="model"
                        pattern="([a-zA-Zа-яА-Я][a-zа-я0-9]{1,15})"
                        placeholder=" "
                        onChange={formik.handleChange}
                        value={formik.values.model}
                    />
                    <span className={styles.form__descriptionInput}>
                        {Translate('model')}
                    </span>
                </label>
                <label className={styles.form__field}>
                    <input
                        className={styles.form__inputText}
                        type="text"
                        name="mark"
                        pattern="([a-zA-Zа-яА-Я][a-zа-я0-9]{2,15}) ?([a-zA-Zа-яА-Я][a-zа-я]{2,10})?"
                        placeholder=" "
                        onChange={formik.handleChange}
                        value={formik.values.mark}
                    />
                    <span className={styles.form__descriptionInput}>
                        {Translate('mark')}
                    </span>
                </label>
                <label className={styles.form__field}>
                    <input
                        className={styles.form__inputText}
                        type="number"
                        name="year"
                        min="1970"
                        max="2022"
                        pattern="\d{4}"
                        placeholder=" "
                        onChange={formik.handleChange}
                        value={formik.values.year}
                    />
                    <span className={styles.form__descriptionInput}>
                        {Translate('firstReg')}
                    </span>
                </label>
                <label className={styles.form__field}>
                    <input
                        className={styles.form__inputText}
                        type="text"
                        name="number"
                        placeholder=" "
                        pattern="[a-zA-Z]{2}\d{4}[a-zA-Z]{2}"
                        onChange={formik.handleChange}
                        value={formik.values.number}
                    />
                    <span className={styles.form__descriptionInput}>
                        {Translate('number')}
                    </span>
                </label>
                <label className={styles.form__field}>
                    <select
                        name="status"
                        required
                        onChange={formik.handleChange}
                        value={formik.values.status}
                    >
                        <FormattedMessage id={'selectStatus'}>
                            {message => (
                                <option value="" label={`${message}`} />
                            )}
                        </FormattedMessage>

                        {statuses.map(({ code }) => (
                            <FormattedMessage key={code} id={code}>
                                {message => (
                                    <option key={code} value={code}>
                                        {message}
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
