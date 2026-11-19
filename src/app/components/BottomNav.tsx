import { Home, Search, ShoppingBag, User, Grid3x3 } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router';

export function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, label: '홈', path: '/' },
    { icon: Grid3x3, label: '카테고리', path: '/category' },
    { icon: Search, label: '검색', path: '/search' },
    { icon: ShoppingBag, label: '장바구니', path: '/cart' },
    { icon: User, label: '마이', path: '/my' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center justify-center gap-1 flex-1 h-full"
            >
              <Icon
                className={`w-5 h-5 ${isActive ? 'text-black' : 'text-muted-foreground'}`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={`text-[10px] ${isActive ? 'text-black font-medium' : 'text-muted-foreground'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
