import styles from './Container.module.scss';

function Container({ children }: { children: React.ReactNode }) {
    return <div className={styles.container}>{children}</div>
}

export default Container;