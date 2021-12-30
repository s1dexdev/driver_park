import { useState, useEffect, useRef } from 'react';
import styles from './Statuses.module.scss';

interface IStatus {
    title: string;
    code: string;
}

interface IUpdateData {
    [key: string]: string | number | IStatus;
}

interface IProps {
    statuses: IStatus[];
    id: number;
    updateCarInfo: (id: number, data: IUpdateData) => void;
    resetIdCar: () => void;
}

export const Statuses = ({
    statuses,
    id,
    updateCarInfo,
    resetIdCar,
}: IProps): JSX.Element => {
    const [isShowList, setIsShowList] = useState(true);

    useEffect(() => {
        const closeStatuses = () => {
            setIsShowList(false);
            resetIdCar();
        };

        window.addEventListener('click', closeStatuses);

        return () => window.removeEventListener('click', closeStatuses);
    }, [resetIdCar]);

    return (
        <ul
            className={
                isShowList
                    ? styles.dropdownContent__active
                    : styles.dropdownContent
            }
        >
            {statuses.map(({ title, code }) => (
                <li
                    key={title}
                    className={styles.dropdownContent__li}
                    onClick={() =>
                        updateCarInfo(id, { status: { title, code } })
                    }
                >
                    {title}
                </li>
            ))}
        </ul>
    );
};
