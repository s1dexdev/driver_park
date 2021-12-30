import { useEffect } from 'react';
import styles from './StatusesList.module.scss';

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
    onUpdateInfo: (id: number, data: IUpdateData) => void;
    setShowStatusList: (value: boolean) => void;
}

export const StatusesList = ({
    statuses,
    id,
    onUpdateInfo,
    setShowStatusList,
}: IProps): JSX.Element => {
    useEffect(() => {
        const closeStatuses = (event: globalThis.MouseEvent) => {
            const backdrop = event.target as HTMLElement;

            if (backdrop.nodeName === 'DIV') {
                setShowStatusList(false);
            }
        };

        window.addEventListener('click', closeStatuses);

        return () => window.removeEventListener('click', closeStatuses);
    }, [setShowStatusList]);

    return (
        <>
            <ul className={styles.dropdownContent}>
                {statuses.map(({ title, code }) => (
                    <li
                        key={title}
                        className={styles.dropdownContent__li}
                        onClick={() =>
                            onUpdateInfo(id, { status: { title, code } })
                        }
                    >
                        {title}
                    </li>
                ))}
            </ul>
            <div className={styles.backdrop}></div>
        </>
    );
};
