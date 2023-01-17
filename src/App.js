import logo from './logo.svg';
import './App.css';
import {SimpsonComponent} from "./Components/SimpsonComponent/SimpsonComponent";

const App = () => {
    return (
        <div className="App">
            <SimpsonComponent itemName={'Rick Sanchez'} pic={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'} id={'1'}
                              status={'Alive'} species={"Human"} gender={"Male"}/>
            <SimpsonComponent itemName={'Morty Smith'} pic={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'} id={'2'}
                              status={'Alive'} species={"Human"} gender={"Male"}/>
            <SimpsonComponent itemName={'Summer Smith'} pic={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'} id={'3'}
                              status={'Alive'} species={"Human"} gender={"Female"}/>
            <SimpsonComponent itemName={'Beth Smith'} pic={"https://rickandmortyapi.com/api/character/avatar/4.jpeg"} id={'4'}
                              status={'Alive'} species={"Human"} gender={"Female"}/>
            <SimpsonComponent itemName={'Jerry Smith'} pic={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'} id={'5'}
                              status={'Alive'} species={"Human"} gender={"Male"}/>
            <SimpsonComponent itemName={'Abadango Cluster Princess'} pic={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'} id={'6'}
                              status={'Alive'} species={"Alien"} gender={"Female"}/>
        </div>
    );
}

export default App;
