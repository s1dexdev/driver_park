import { useEffect } from 'react';
import { ReactComponent as IconLogo } from '../../images/logo.svg';
import { ReactComponent as IconDriver } from './driver.svg';
import { ReactComponent as IconCar } from './car.svg';
import styles from './Menu.module.scss';

function Menu({ onShowMenu }: { onShowMenu: Function }) {
    const closeMenu = (event: MouseEvent) => {
        onShowMenu(false);
    };

    useEffect(() => {
        window.addEventListener('click', closeMenu);

        return () => {
            window.removeEventListener('click', closeMenu);
        };
    });

    return (
        <div className={styles.menu}>
            <IconLogo className={styles.menu__logo} />
            <ul className={styles.menu__list}>
                <li className={styles.menu__item}>
                    <span className={styles.menu__itemContent}>
                        <IconDriver className={styles.menu__icon} />
                        Drivers
                    </span>
                </li>
                <li className={styles.menu__item}>
                    <span className={styles.menu__itemContent}>
                        <IconCar className={styles.menu__icon} />
                        Cars
                    </span>
                </li>
            </ul>
            <div className={styles.menu__footer}>
                <p className={styles.menu__rights}>&copy; 2021 Artjoker</p>
                <p className={styles.menu__info}>
                    <span className={styles.menu__info_underline}>
                        Terms of service
                    </span>{' '}
                    ·{' '}
                    <span className={styles.menu__info_underline}>
                        Privacy Policy
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Menu;
