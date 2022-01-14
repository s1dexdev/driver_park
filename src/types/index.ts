export interface Status {
    title: string;
    code: string;
}

export interface Car {
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

export interface Driver {
    id: number;
    first_name: string;
    last_name: string;
    date_created: number;
    date_birth: number;
    status: Status;
}

export interface Action<P> {
    type: string;
    payload: P;
}

export type InfoUpdate = string | number | Status;
