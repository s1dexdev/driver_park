interface Status {
    title: string;
    code: string;
}

interface Car {
    id: number;
    model: string;
    mark: string;
    year: number;
    number: string;
    driver_id: number;
    driver_firstname?: string;
    driver_lastname?: string;
    status: Status;
}

interface Driver {
    id: number;
    first_name: string;
    last_name: string;
    date_created: number;
    date_birth: number;
    status: Status;
}

interface Action<P> {
    type: string;
    payload: P;
}

type CreateAction = (
    type: string,
) => <P>(data?: P) => { type: string; payload?: P };

type InfoUpdate = string | number | Status;

export type { Status, Car, Driver, Action, CreateAction, InfoUpdate };
