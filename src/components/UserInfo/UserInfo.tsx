import { ReactComponent as IconAvatar } from './avatar.svg';
import { ReactComponent as IconArrow } from './arrow.svg';
import styles from './UserInfo.module.scss';

function UserInfo() {
    return (
        <div className={styles.userInfo}>
            <IconAvatar />
            <p className={styles.userInfo__name}>Username</p>
            <IconArrow className={styles.userInfo__arrow} />
        </div>
    );
}

export default UserInfo;
