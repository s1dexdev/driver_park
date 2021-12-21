interface ICar {
    id: number;
    model: string;
    mark: string;
    year: number;
    number: string;
    driver_id: number;
    driver_firstname?: string;
    driver_lastname?: string;
    status: {
        title: string;
        code: string;
    };
}

interface IState {
    carsReducer: { cars: ICar[] };
}

export const carsSelector = (state: IState): ICar[] => state.carsReducer.cars;
