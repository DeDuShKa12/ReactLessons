import './App.css';
import {useState} from "react";
import {CarForm, Cars} from "./component";

function App() {

    const [cars, setCars] = useState([]);

    const [car, setCar] = useState(null);


    return (
        <div className="App">

            <CarForm setCars={setCars} car={car}/>

            <hr/>

            <Cars setCars={setCars} cars={cars} setCar={setCar}/>

        </div>
    );
}

export default App;
