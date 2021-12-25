import { useDispatch } from 'react-redux';
import styles from './DeleteForm.module.scss';

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
        <div className={styles.formWrapper}>
            <p className={styles.formWrapper__text}>
                Do you really want to delete the {text} ?
            </p>
            <button
                className={styles.formWrapper__btnDelete}
                onClick={() => deleteItem()}
            >
                Delete
            </button>
            <button onClick={() => setActiveModal(false)}>Cancel</button>
        </div>
    );
};
