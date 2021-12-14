import { FunctionComponent, SVGProps } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../Container';
import { ReactComponent as Home } from '../../images/home.svg';
import { ReactComponent as Arrow } from '../../images/rightArrow.svg';
import navConfig from '../../utils/constants/navConfig';
import styles from './NavBar.module.scss';

type Icon = FunctionComponent<SVGProps<SVGSVGElement>>;

function NavBar({ icon, text }: { icon: Icon; text: string }): JSX.Element {
    const { home } = navConfig;
    const IconHome = icon;

    return (
        <div className={styles.navBar}>
            <Container>
                <div className={styles.navBar__wrapper}>
                    <NavLink className={styles.navBar__link} to="/">
                        <Home className={styles.navBar__icon} />
                        <span className={styles.navBar__textHome}>
                            {home.label}
                        </span>
                    </NavLink>
                    <Arrow className={styles.navBar__arrow} />
                    <IconHome className={styles.navBar__icon} />
                    <span>{text}</span>
                </div>
            </Container>
        </div>
    );
}

export default NavBar;
