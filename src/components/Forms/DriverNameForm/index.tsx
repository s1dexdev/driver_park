import { useEffect, FormEvent } from 'react';
import { useFormik } from 'formik';
import styles from '../Form.module.scss';

interface IProps {
    id: number;
    currentName: string;
    updateDriverInfo: (
        id: number,
        data: { [key: string]: number | string },
    ) => void;
    changeStateInput: (newState: boolean) => void;
}

export function DriverNameForm({
    id,
    currentName,
    updateDriverInfo,
    changeStateInput,
}: IProps): JSX.Element {
    const regexpName = /^[A-ZА-Я]{1}[a-zа-я]{1,10} [A-ZА-Я]{1}[a-zа-я]{1,10}$/;

    useEffect(() => {
        const closeInput = (event: globalThis.MouseEvent) => {
            const { nodeName } = event.target as HTMLElement;

            if (nodeName !== 'INPUT') {
                changeStateInput(false);
            }
        };

        window.addEventListener('click', closeInput);

        return () => window.removeEventListener('click', closeInput);
    }, [changeStateInput]);

    const updateDriverName = (newName: string) => {
        if (newName === currentName) {
            return;
        }

        const [firstName, lastName] = newName.split(' ');

        const driverFullName = {
            first_name: firstName,
            last_name: lastName,
        };

        changeStateInput(false);
        updateDriverInfo(id, driverFullName);
    };

    const formik = useFormik({
        initialValues: {
            newName: currentName,
        },

        onSubmit: ({ newName }) => {
            if (regexpName.test(newName)) {
                updateDriverName(newName);
            }
        },
    });

    const handleForm = (event: FormEvent) => {
        event.preventDefault();
        formik.handleSubmit();
    };

    return (
        <form
            className={styles.driverNameForm}
            autoComplete="off"
            onSubmit={handleForm}
            onBlur={formik.handleSubmit}
        >
            <input
                className={styles.driverNameForm__input}
                type="text"
                name="newName"
                value={formik.values.newName}
                onChange={formik.handleChange}
            />
        </form>
    );
}
