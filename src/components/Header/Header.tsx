import Container from '../Container';
import HeaderMenu from '../HeaderMenu';
import UserInfo from '../UserInfo';
import styles from './Header.module.scss';

function Header() {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header__wrapper}>
                    <HeaderMenu />
                    <UserInfo />
                </div>
            </Container>
        </header>
    );
}

export default Header;
