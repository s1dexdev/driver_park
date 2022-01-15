export const concatClasses = (
    styles: Record<string, string>,
    classes: string[],
): string => {
    return classes.map(item => styles[item]).join(' ');
};
