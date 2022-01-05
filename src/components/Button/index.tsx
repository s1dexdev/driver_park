import { render, RenderOptions } from '@testing-library/react';

interface IProps {
    img?: JSX.Element;
    text?: string | JSX.Element;
    name?: string;
    className: string;
    onClick: () => void;
}

export const Button = ({
    img,
    text,
    name,
    className,
    onClick,
}: IProps): JSX.Element => {
    return (
        <button onClick={onClick} className={className} name={name}>
            {text}
            {img}
        </button>
    );
};
