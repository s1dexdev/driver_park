import React from 'react';
import styles from './DeleteDriverForm.module.scss';
import { deleteDriverRequest } from '../../redux/drivers/actions';
import { useDispatch } from 'react-redux';

export const DeleteDriverForm = ({ id }: { id: number }): JSX.Element => {
    const dispatch = useDispatch();

    const deleteDriver = () => {
        dispatch(deleteDriverRequest(id));
    };
    return (
        <form className={styles.deleteForm__form}>
            <h1 className={styles.deleteForm__title}>
                Do you really want to remove the driver?
            </h1>
            <div className={styles.deleteForm__btn}>
                <button
                    className={styles.deleteForm__btnRemove}
                    onClick={() => deleteDriver}
                >
                    Remove
                </button>
                <button className={styles.deleteForm__btnNoRemove}>No</button>
            </div>
        </form>
    );
};
