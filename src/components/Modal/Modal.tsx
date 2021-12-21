import React from 'react';
import styles from './Modal.module.scss';

export const Modal = ({
    active,
    setActive,
}: {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <div
            className={active ? 'styles.modal__active' : 'styles.modal'}
            onClick={() => setActive(false)}
        >
            <div
                className={styles.modal__form}
                onClick={event => event.stopPropagation()}
            ></div>
        </div>
    );
};
