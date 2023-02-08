import {Header, Posts, Users} from "./components";
import css from './App.module.css'


function App() {


    return (
        <div className="App">

            <Header/>
            <hr/>
            <div className={css.main}>
                <Posts/>
                <Users/>
            </div>

        </div>
    );
}

export default App;
