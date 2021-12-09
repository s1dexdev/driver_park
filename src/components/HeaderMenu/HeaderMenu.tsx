import { ReactComponent as IconMenu } from './menu.svg';
import { ReactComponent as IconLogo } from '../../images/logo.svg';
import styles from './HeaderMenu.module.scss';

function HeaderMenu({
    showMenu,
}: {
    showMenu: React.MouseEventHandler<SVGSVGElement>;
}) {
    return (
        <div className={styles.headerMenu}>
            <IconMenu className={styles.headerMenu__menu} onClick={showMenu} />

            <IconLogo />
        </div>
    );
}

export default HeaderMenu;
