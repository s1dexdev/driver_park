export interface DriversArr {
    id: number;
    name_surname: string;
    registration: string;
    date_birth: string;
    status: string;
}

const Drivers: DriversArr[] = [
    {
        id: 1,
        name_surname: 'Fedya Juk',
        registration: '12.05.2021',
        date_birth: '02.05.2021',
        status: 'active',
    },
    {
        id: 2,
        name_surname: 'Vasya Juk',
        registration: '12.05.2021',
        date_birth: '02.05.2021',
        status: 'active',
    },
    {
        id: 3,
        name_surname: 'Senya Juk',
        registration: '12.05.2021',
        date_birth: '02.05.2021',
        status: 'no active',
    },
];

export default Drivers;
