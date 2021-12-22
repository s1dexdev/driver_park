interface IStyles {
    [key: string]: string;
}

export const concatClasses = (styles: IStyles, classes: string[]): string => {
    return classes.map(item => styles[item]).join(' ');
};
