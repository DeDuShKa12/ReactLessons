import {Header, Posts, UsersModule} from "./components";
import css from './App.module.css'


function App() {


    return (
        <div className="App">

            <Header/>
            <hr/>
            <div className={css.main}>
                <Posts/>
                <UsersModule/>
            </div>

        </div>
    );
}

export default App;
