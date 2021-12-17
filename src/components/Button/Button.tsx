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
        <button className={className} onClick={onClick} name={name}>
            {text}
            {img}
        </button>
    );
};
