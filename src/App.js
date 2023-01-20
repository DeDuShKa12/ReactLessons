import './App.css';
import Users from "./components/Users/Users";
import {Posts} from "./components/Posts/Posts";
import React, {useState} from "react";

function App() {

    const [idUser, setIdUser] = useState(null);

    console.log(idUser);

    return (
        <div className="App">
            <Users setIdUser={setIdUser}/>
            <hr/>
            {idUser && <Posts idUser={idUser}/>}
        </div>
    );
}

export default App;
