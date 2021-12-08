import { ReactComponent as Avatar } from './avatar.svg';
import { ReactComponent as Arrow } from './arrow.svg';
import styles from './UserInfo.module.scss';

function UserInfo() {
    return (
        <div className={styles.userInfo}>
            <Avatar />
            <p className={styles.userInfo__name}>Username</p>
            <Arrow className={styles.userInfo__arrow} />
        </div>
    );
}

export default UserInfo;
