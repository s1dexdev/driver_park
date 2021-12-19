import Driver from './Driver';

interface IDriver {
    id: number;
    first_name: string;
    last_name: string;
    date_created: number;
    date_birth: number;
    status: {
        title: string;
        code: string;
    };
}

const DriversBlock = ({ drivers }: { drivers: IDriver[] }): JSX.Element => {
    return (
        <>
            {drivers.map((item: IDriver) => (
                <div key={item.id}>
                    <Driver driver={item} />
                </div>
            ))}
        </>
    );
};

export default DriversBlock;
