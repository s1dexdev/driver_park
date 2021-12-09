import { useState } from 'react';
import Container from '../Container';
import HeaderMenu from '../HeaderMenu';
import UserInfo from '../UserInfo';
import Menu from '../Menu';
import styles from './Header.module.scss';

function Header() {
    const [menu, setMenu] = useState(false);

    const showMenu = () => {
        setMenu(true);
    };

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header__wrapper}>
                    <HeaderMenu showMenu={showMenu} />
                    <UserInfo />
                </div>
                {menu && <Menu onShowMenu={setMenu} />}
            </Container>
        </header>
    );
}

export default Header;
