import styles from './Container.module.scss';

export function Container({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return <div className={styles.container}>{children}</div>;
}
