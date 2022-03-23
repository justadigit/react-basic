import Home from './components/Home';
import About from './components/About';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Product from './components/Product';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';
import Post from './components/Post';
import Post1 from './components/Post1';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/order-summary" element={<OrderSummary />}></Route>
        <Route path="/products" element={<Product />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />}></Route>
          <Route path="new" element={<NewProducts />}></Route>
        </Route>
        <Route path="posts" element={<Post />}></Route>
        <Route path="posts/:pId" element={<PostDetail />}></Route>

        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
