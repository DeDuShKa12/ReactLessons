import './App.css';
import {useState} from "react";
import {CarForm, Cars} from "./component";

function App() {
    const [car, setCar] = useState([]);

    return (
        <div className="App">

            <CarForm car={car}/>

            <hr/>

            <Cars setCar={setCar}/>

        </div>
    );
}

export default App;
