import { Route, Routes } from 'react-router-dom';
import {MainPage} from "./MainPage/MainPage";
import {ProfilePage} from "./ProfilePage/ProfilePage";
import {NotFoundPage} from "./NotFoundPage/NotFoundPage";
import {DefinedLayout} from "./DefinedLayout/DefinedLayout";
import {Suspense} from "react";
import {PageLoader} from "./PageLoader/PageLoader";

export default function AppRoutes() {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route path="/" element={<DefinedLayout />}>
                    <Route index element={<MainPage/>}/>
                    <Route path="/:id" element={<ProfilePage/>}/>
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    );
}
