import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu, UserInfo } from '../';
import { LOCALES } from '../../lang';
import { ReactComponent as IconMenu } from '../../assets/images/menu.svg';
import { ReactComponent as IconLogo } from '../../assets/images/logo.svg';
import { ReactComponent as Rus } from '../../assets/images/ru.svg';
import { ReactComponent as Eng } from '../../assets/images/gb.svg';
import styles from './Header.module.scss';

interface IProps {
    onChangeLanguage: (language: string) => void;
}

export function Header({ onChangeLanguage }: IProps): JSX.Element {
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
                    <div className={styles.header__infoWrapper}>
                        <UserInfo />
                        <div className={styles.header__langBox}>
                            <button
                                type="button"
                                className={styles.header__langBtn}
                                onClick={() =>
                                    onChangeLanguage(LOCALES.ENGLISH)
                                }
                            >
                                <Eng width={24} />
                            </button>
                            <button
                                type="button"
                                className={styles.header__langBtn}
                                onClick={() =>
                                    onChangeLanguage(LOCALES.RUSSIAN)
                                }
                            >
                                <Rus width={24} />
                            </button>
                        </div>
                    </div>
                </div>
                {menu && <Menu onShowMenu={setMenu} />}
            </Container>
        </header>
    );
}
