import { FormattedMessage } from 'react-intl';

export const Translate = (
    id: string,
    value: Record<string, string | JSX.Element> = {},
): JSX.Element => <FormattedMessage id={id} values={{ ...value }} />;
