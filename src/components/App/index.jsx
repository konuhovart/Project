
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Nav from "../Nav";
import { useEffect } from "react";
import { fetchCategory } from "../../store/slice/categorySlice";
import { fetchProducts } from "../../store/slice/productSlice";
import Foot from "../Foot";
import HomePage from "../../pages/HomePage";
import CategoryPage from "../../pages/CategoryPage";
import CategoryProductsPage from "../../pages/CategoryProductsPage";
import AllProductsPage from "../../pages/AllProductsPage";
import SalesPage from "../../pages/SalesPage";
import SingleProductPage from "../../pages/SingleProductPage";
import CartPage from "../../pages/CartPage";
import Error from "../../components/Error";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory())
    dispatch(fetchProducts())
  }, [])

  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/category' element={<CategoryPage />} />
        <Route path='/category/:categoryId' element={<CategoryProductsPage />} />
        <Route path='/products/all' element={<AllProductsPage />} />
        <Route path='/product/sale' element={<SalesPage />} />
        <Route path='/product/:id' element={<SingleProductPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='*' element={<Error />} />
      </Routes>

      <Foot />
    </div>
  );
}

export default App;
