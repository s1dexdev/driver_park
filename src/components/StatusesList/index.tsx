import { useEffect } from 'react';
import { Translate } from '../../lang';
import styles from './StatusesList.module.scss';
import { Status, InfoUpdate } from '../../types';

interface IProps {
    statuses: Status[];
    id: number;
    onUpdateInfo: (id: number, data: Record<string, InfoUpdate>) => void;
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
                        {Translate(`${code}`)}
                    </li>
                ))}
            </ul>
            <div className={styles.backdrop}></div>
        </>
    );
};
