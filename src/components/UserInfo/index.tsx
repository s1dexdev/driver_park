import { ReactComponent as IconAvatar } from '../../images/avatar.svg';
import { ReactComponent as IconArrow } from '../../images/bottomArrow.svg';
import styles from './UserInfo.module.scss';

export function UserInfo(): JSX.Element {
    return (
        <div className={styles.userInfo}>
            <IconAvatar />
            <p className={styles.userInfo__name}>Username</p>
            <IconArrow className={styles.userInfo__arrow} />
        </div>
    );
}
