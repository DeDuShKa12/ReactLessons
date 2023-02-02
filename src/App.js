import {Route, Routes} from "react-router-dom";

import {AlbumsPage, AuthPage, CommentsPage, HomePage, NotFoundPage, PostPage, TodosPage} from "./pages";
import {MainLayout} from "./layouts";
import {RequireAuth} from "./hoc/RequireAuth";


const App = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'albums'} element={<AlbumsPage/>}/>
                    <Route path={'todos'} element={
                        <RequireAuth>
                            <TodosPage/>
                        </RequireAuth>}/>
                    <Route path={'comments'} element={<CommentsPage/>}>
                        <Route path={':postId'} element={<PostPage/>}/>
                    </Route>

                    <Route path={'login'} element={<AuthPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export {App};
