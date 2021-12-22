export const Button = ({
    img,
    text,
    name,
    className,
    onClick,
}: {
    img?: JSX.Element;
    text?: string;
    name?: string;
    className: string;
    onClick: () => boolean;
}): JSX.Element => {
    return (
        <button onClick={onClick} className={className} name={name}>
            {text}
            {img}
        </button>
    );
};
