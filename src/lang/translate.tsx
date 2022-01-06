import { FormattedMessage } from 'react-intl';

interface IValue {
    [key: string]: string | JSX.Element;
}

export function Translate(id: string, value: IValue = {}): JSX.Element {
    return <FormattedMessage id={id} values={{ ...value }} />;
}
