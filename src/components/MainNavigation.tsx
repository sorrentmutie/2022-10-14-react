import { Route, Routes } from "react-router-dom";
import { AboutPage } from "../pages/AboutPage";
import { FeaturesPage } from "../pages/FeaturesPage";
import { HomePage } from '../pages/Home';
import { PricingPage } from "../pages/Pricing";

export const MainNavigation = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/features' element={<FeaturesPage/>} />
            <Route path='/pricing' element={<PricingPage/>} />
        </Routes>
    );
}