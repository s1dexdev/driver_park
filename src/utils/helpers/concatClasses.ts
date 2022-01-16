export const concatClasses = (
    styles: Record<string, string>,
    classes: string[],
): string => classes.map(item => styles[item]).join(' ');
