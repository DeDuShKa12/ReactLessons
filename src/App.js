import {Route, Routes} from "react-router-dom";


import {MainLayout} from "./layouts";
import {Home} from "./pages/HomePage/HomePage";
import {CommentsPage, PostsPage} from "./pages";




function App() {


    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
