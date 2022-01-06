import { FunctionComponent, SVGProps } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '../';
import { Translate } from '../../lang';
import { ReactComponent as Home } from '../../images/home.svg';
import { ReactComponent as Arrow } from '../../images/rightArrow.svg';
import { navConfig } from '../../utils/constants';
import styles from './NavBar.module.scss';

type TIcon = FunctionComponent<SVGProps<SVGSVGElement>>;

export function NavBar({
    icon,
    text,
}: {
    icon: TIcon;
    text: string;
}): JSX.Element {
    const { home } = navConfig;
    const IconHome = icon;

    return (
        <div className={styles.navBar}>
            <Container>
                <div className={styles.navBar__wrapper}>
                    <NavLink className={styles.navBar__link} to="/">
                        <Home className={styles.navBar__icon} />
                        <span className={styles.navBar__textHome}>
                            {Translate(home.label)}
                        </span>
                    </NavLink>
                    <Arrow className={styles.navBar__arrow} />
                    <IconHome className={styles.navBar__icon} />
                    <span>{Translate(text)}</span>
                </div>
            </Container>
        </div>
    );
}
