import React from 'react';

const User = ({user, setGetId}) => {
    const {name, id} = user;
    return (
        <div>

            <h4>{id} {name}</h4>
            <button onClick={()=>setGetId(id)}>More Information</button>
            
        </div>
    );
};

export default User;