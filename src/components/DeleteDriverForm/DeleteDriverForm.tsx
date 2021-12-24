import React from 'react';
import styles from './DeleteDriverForm.module.scss';

export const DeleteDriverForm = (): JSX.Element => {
    return (
        <form className={styles.deleteForm__form}>
            <h1 className={styles.deleteForm__title}>
                Do you really want to remove the driver?
            </h1>
            <div className={styles.deleteForm__btn}>
                <button className={styles.deleteForm__btnRemove}>Remove</button>
                <button className={styles.deleteForm__btnNoRemove}>No</button>
            </div>
        </form>
    );
};
