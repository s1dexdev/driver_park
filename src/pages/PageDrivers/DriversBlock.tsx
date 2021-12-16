import React from 'react';
import Driver from './Driver';

const DriversBlock = ({ drivers }: any) => {
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
