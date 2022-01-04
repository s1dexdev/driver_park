import { FormattedMessage } from 'react-intl';

export function Translate(id: string): JSX.Element {
    return <FormattedMessage id={id} />;
}
