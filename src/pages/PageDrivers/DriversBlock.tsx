import Driver from './Driver';

const DriversBlock = ({ drivers }: any): JSX.Element => {
    return (
        <>
            {drivers.map((item: any) => (
                <div key={item.id}>
                    <Driver driver={item} />
                </div>
            ))}
        </>
    );
};

export default DriversBlock;
