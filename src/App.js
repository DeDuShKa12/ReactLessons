import React, {useState} from "react";
import './App.css';
import {Posts, Users} from "./components";

function App() {

    const [idUser, setIdUser] = useState(null);

    return (
        <div className="App">
            <Users setIdUser={setIdUser}/>
            <hr/>
            {idUser && <Posts idUser={idUser}/>}
        </div>
    );
}
export default App;
