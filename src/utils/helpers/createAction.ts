type CreateAction = (
    type: string,
) => <P>(data?: P) => { type: string; payload?: P };

export const createAction: CreateAction = type => data => ({
    type,
    payload: data,
});
