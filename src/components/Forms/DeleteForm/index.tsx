import { useDispatch } from 'react-redux';
import styles from '../Form.module.scss';

interface IAction<P> {
    type: string;
    payload?: P;
}

interface IProps {
    id: number;
    text: string;
    deleteAction: <P>(id: P) => IAction<P>;
    setActiveModal: (b: boolean) => void;
}

export const DeleteForm = ({
    id,
    text,
    deleteAction,
    setActiveModal,
}: IProps): JSX.Element => {
    const dispatch = useDispatch();

    const deleteItem = () => {
        dispatch(deleteAction(id));
        setActiveModal(false);
    };
    return (
        <div className={styles.deleteFormWrapper}>
            <p className={styles.deleteFormWrapper__text}>
                Do you really want to delete this {text} ?
            </p>
            <button
                className={styles.deleteFormWrapper__btnDelete}
                onClick={() => deleteItem()}
            >
                Delete
            </button>
            <button onClick={() => setActiveModal(false)}>Cancel</button>
        </div>
    );
};
