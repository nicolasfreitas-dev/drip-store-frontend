import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import PageLayout from "@/pages/layout/PageLayout";
import ProductListingPage from "@/pages/ProductListingPage";
import ProductViewPage from "@/pages/ProductViewPage";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/produtos" element={<ProductViewPage />} />
                    <Route path="/listadeprodutos" element={<ProductListingPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;
