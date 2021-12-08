import { ReactComponent as Menu } from './menu.svg';
import { ReactComponent as Logo } from './logo.svg';
import styles from './HeaderMenu.module.scss';

function HeaderMenu() {
    return (
        <div className={styles.headerMenu}>
            <Menu className={styles.headerMenu__menu} />
            <Logo />
        </div>
    );
}

export default HeaderMenu;
