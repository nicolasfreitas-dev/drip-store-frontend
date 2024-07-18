import HomePage from "@/pages/HomePage"
import PageLayout from "@/pages/layout/PageLayout"
import ProductListingPage from "@/pages/ProductListingPage"
import ProductViewPage from "@/pages/ProductViewPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/products" element={<ProductViewPage />} />
                    <Route path="/productslist" element={<ProductListingPage />} />
                </Route>
            </Routes>
        </Router>
    )
}