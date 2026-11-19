import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { BottomNav } from './components/BottomNav';
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { ProductDetail } from './pages/ProductDetail';
import { Search } from './pages/Search';
import { Cart } from './pages/Cart';
import { MyPage } from './pages/MyPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background max-w-md mx-auto relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}
