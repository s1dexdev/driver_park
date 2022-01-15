import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import { LOCALES } from './locales';
import messages from './messages';

interface IProps {
    children: React.ReactNode;
    locale: string;
}

export function I18nProvider({
    children,
    locale = LOCALES.ENGLISH,
}: IProps): JSX.Element {
    return (
        <IntlProvider
            locale={locale}
            textComponent={Fragment}
            messages={messages[locale]}
        >
            {children}
        </IntlProvider>
    );
}
