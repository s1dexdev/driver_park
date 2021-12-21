export const Button = ({
    img,
    text,
    onClick,
    Name,
}: {
    img?: JSX.Element;
    text?: string;
    Name: string;
    onClick: () => boolean;
}): JSX.Element => {
    return (
        <button onClick={onClick} className={Name}>
            {text}
            {img}
        </button>
    );
};
