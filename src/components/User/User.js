import React from 'react';

const User = ({user, setBtnEvent}) => {
    const {name, id} = user;
    return (
        <div>

            <h4>{id} {name}</h4>
            <button onClick={event=>setBtnEvent(id)}>More Information</button>
            
        </div>
    );
};

export default User;