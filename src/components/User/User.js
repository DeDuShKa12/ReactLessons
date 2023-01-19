import React from 'react';

const User = ({user}) => {
    const {id, name} = user
    return (
        <div>

            <h2>{id} {name}</h2>
            
        </div>
    );
};

export default User;