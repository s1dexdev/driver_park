export const Button = ({
    img,
    text,
    onClick,
}: {
    img?: JSX.Element;
    text?: string;
    onClick: () => boolean;
}): JSX.Element => {
    return (
        <button onClick={onClick}>
            {text}
            {img}
        </button>
    );
};
