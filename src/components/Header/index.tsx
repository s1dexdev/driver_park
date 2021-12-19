import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu, UserInfo } from '../';
import { ReactComponent as IconMenu } from '../../images/menu.svg';
import { ReactComponent as IconLogo } from '../../images/logo.svg';
import styles from './Header.module.scss';

export function Header(): JSX.Element {
    const [menu, setMenu] = useState(false);

    const showMenu = () => {
        setMenu(true);
    };

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header__wrapper}>
                    <div className={styles.headerMenu}>
                        <IconMenu
                            className={styles.headerMenu__icon}
                            onClick={showMenu}
                        />
                        <NavLink to="/">
                            <IconLogo />
                        </NavLink>
                    </div>
                    <UserInfo />
                </div>
                {menu && <Menu onShowMenu={setMenu} />}
            </Container>
        </header>
    );
}
