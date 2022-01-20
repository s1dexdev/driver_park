import { useDispatch } from 'react-redux';
import { Translate } from '../../../lang';
import styles from '../Form.module.scss';

interface IProps {
    id: number;
    text: string | JSX.Element;
    deleteAction: (id: number) => void;
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
            <p className={styles.deleteFormWrapper__text}>{text}</p>
            <button
                className={styles.deleteFormWrapper__btnDelete}
                onClick={() => deleteItem()}
            >
                {Translate('delete')}
            </button>
            <button onClick={() => setActiveModal(false)}>
                {Translate('cancel')}
            </button>
        </div>
    );
};
