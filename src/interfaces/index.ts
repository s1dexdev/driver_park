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

interface State {
    driversReducer: {
        drivers: Driver[];
        statuses: Status[];
        isLoading: boolean;
    };

    carsReducer: {
        cars: Car[];
        statuses: Status[];
        isLoading: boolean;
        error: null | string;
    };

    localeReducer: {
        lang: string;
    };
}

interface Action<P> {
    type: string;
    payload: P;
}

type InfoUpdate = string | number | Status;

export type { Status, Car, Driver, Action, InfoUpdate, State };
