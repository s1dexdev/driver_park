import React from 'react';
import styles from './Modal.module.scss';

export const Modal = ({
    children,
    active,
    setActive,
}: {
    children: React.ReactNode;
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element => {
    return (
        <div
            className={styles[active ? 'modal__active' : 'modal']}
            onClick={() => setActive(false)}
        >
            <div
                className={styles.modal__form}
                onClick={event => event.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};
