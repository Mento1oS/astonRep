import { Route, Routes } from 'react-router-dom';
import {MainPage} from "./MainPage/MainPage";
import {ProfilePage} from "./ProfilePage/ProfilePage";
import {NotFoundPage} from "./NotFoundPage/NotFoundPage";
import {DefinedLayout} from "./DefinedLayout/DefinedLayout";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<DefinedLayout />}>
                <Route index element={<MainPage/>}/>
                <Route path="/:id" element={<ProfilePage/>}/>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}
