import React from 'react';

const User = ({user, setIdUser}) => {
    const {name, id} = user;
    return (
        <div>

            <h4>{id} {name}</h4>
            <button onClick={()=>setIdUser(id)}>More Information</button>
            
        </div>
    );
};

export {User};