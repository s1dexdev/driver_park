import styles from './Statuses.module.scss';
import { useEffect } from 'react';

interface IStatus {
    title: string;
    code: string;
}

export const Statuses = ({
    statuses,
    id,
    active,
    focusElement,
    activeBackDrop,
    updateStatus,
    backDrop,
}: {
    statuses: IStatus[];
    id: string;
    active: boolean;
    focusElement: string;
    activeBackDrop: boolean;
    updateStatus: (id: number, title: string, code: string) => void;
    backDrop: (a: boolean) => void;
}): JSX.Element => {
    useEffect(() => {
        const closeMenu = () => {
            backDrop(!activeBackDrop);
        };
        window.addEventListener('click', closeMenu);

        return () => {
            window.removeEventListener('click', closeMenu);
        };
    }, [backDrop, activeBackDrop]);

    return (
        <ul
            id={id}
            className={
                styles[
                    active && !activeBackDrop && focusElement === id
                        ? 'dropdownContent__active'
                        : 'dropdownContent'
                ]
            }
        >
            {statuses.map(({ title, code }) => {
                return (
                    <li
                        key={title}
                        className={styles.dropdownContent__li}
                        onClick={() => updateStatus(Number(id), title, code)}
                    >
                        {title}
                    </li>
                );
            })}
        </ul>
    );
};
