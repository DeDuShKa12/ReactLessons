import './App.css';
import {CarForm, Cars} from "./component";
import {useState} from "react";

function App() {
    const [car, setCar] = useState([]);

    return (
        <div className="App">
            <CarForm/>
            <hr/>
            <Cars setCars={setCar}/>
        </div>
    );
}

export default App;
