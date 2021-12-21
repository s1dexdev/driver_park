import Loader from 'react-loader-spinner';
import styles from './Spinner.module.scss';

export function Spinner(): JSX.Element {
    return (
        <div className={styles.spinner_backdrop}>
            <Loader type="Puff" color="#00BFFF" height={150} width={150} />
        </div>
    );
}
