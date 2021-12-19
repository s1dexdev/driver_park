interface ICar {
    id: number;
    model: string;
    mark: string;
    year: number;
    number: string;
    driver_id: number;
    status: {
        title: string;
        code: string;
    };
}

interface IState {
    carsReducer: { cars: ICar[] };
}

export const carsSelector = (state: IState): ICar[] => state.carsReducer.cars;
