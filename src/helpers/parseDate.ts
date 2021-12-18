export const parseDate = (date: number): string => {
    const parsedDate = new Date(date).toLocaleDateString();

    return parsedDate;
};
