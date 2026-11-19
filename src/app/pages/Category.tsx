import { ImageWithFallback } from '../components/ImageWithFallback';
import { ChevronDown, SlidersHorizontal, Heart } from 'lucide-react';

const categories = [
  { id: 'all', name: '전체', icon: '✨' },
  { id: 'outer', name: '아우터', icon: '🧥' },
  { id: 'top', name: '상의', icon: '👚' },
  { id: 'bottom', name: '하의', icon: '👖' },
  { id: 'dress', name: '원피스', icon: '👗' },
  { id: 'acc', name: '악세서리', icon: '👜' },
];

const styleTags = ['데일리', '캠퍼스', '오피스', '데이트', '미니멀', '스트릿'];

const products = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1616847220575-31b062a4cd05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjB3b21hbiUyMGNsb3RoZXN8ZW58MXx8fHwxNzc5NjY0NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'MINIMAL',
    name: '블랙 테일러드 블레이저',
    price: 89000,
    discount: 15,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1627577279474-b87fe8490617?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhZXN0aGV0aWMlMjBmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjB3b21hbiUyMGNsb3RoZXN8ZW58MXx8fHwxNzc5NjY0NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'AESTHETIC',
    name: '롱 셔츠 드레스',
    price: 69000,
    discount: 20,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxhZXN0aGV0aWMlMjBmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjB3b21hbiUyMGNsb3RoZXN8ZW58MXx8fHwxNzc5NjY0NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'DAILY',
    name: '화이트 코튼 원피스',
    price: 59000,
    discount: 0,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxhZXN0aGV0aWMlMjBmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjB3b21hbiUyMGNsb3RoZXN8ZW58MXx8fHwxNzc5NjY0NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'MOOD',
    name: '베이직 선글라스',
    price: 35000,
    discount: 10,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1704627363839-f45011475633?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxhZXN0aGV0aWMlMjBmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjB3b21hbiUyMGNsb3RoZXN8ZW58MXx8fHwxNzc5NjY0NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'MODERN',
    name: '플리츠 미디 스커트',
    price: 65000,
    discount: 15,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1676145731619-23094f3f8895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxhZXN0aGV0aWMlMjBmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjB3b21hbiUyMGNsb3RoZXN8ZW58MXx8fHwxNzc5NjY0NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'STYLE',
    name: '레더 재킷',
    price: 159000,
    discount: 25,
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1618244965061-1d27b208d6e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxhZXN0aGV0aWMlMjBmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjB3b21hbiUyMGNsb3RoZXN8ZW58MXx8fHwxNzc5NjY0NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'BASIC',
    name: '트렌치 코트',
    price: 129000,
    discount: 20,
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1622555434807-ca6d0a6f7c4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxhZXN0aGV0aWMlMjBmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjB3b21hbiUyMGNsb3RoZXN8ZW58MXx8fHwxNzc5NjY0NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'CHIC',
    name: '옐로우 니트',
    price: 49000,
    discount: 0,
  },
];

export function Category() {
  return (
    <div className="pb-20 bg-white">
      {/* 헤더 */}
      <header className="sticky top-0 bg-white z-40 border-b border-border/50">
        <div className="px-5 py-4">
          <h1 className="tracking-tight">카테고리</h1>
        </div>
      </header>

      {/* 카테고리 탭 */}
      <section className="sticky top-[57px] bg-white z-30 border-b border-border/50">
        <div className="flex overflow-x-auto scrollbar-hide px-5 py-4 gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm hover:bg-muted transition-colors"
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* 스타일 태그 */}
      <section className="px-5 py-4 border-b border-border/50">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm text-muted-foreground">스타일</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {styleTags.map((tag, index) => (
            <button
              key={index}
              className="px-3 py-1.5 border border-border rounded-full text-sm hover:bg-secondary transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* 필터 & 정렬 */}
      <section className="sticky top-[145px] bg-white z-30 px-5 py-3 flex items-center justify-between border-b border-border/50">
        <button className="flex items-center gap-1 text-sm">
          <SlidersHorizontal className="w-4 h-4" />
          <span>필터</span>
        </button>
        <button className="flex items-center gap-1 text-sm text-muted-foreground">
          <span>인기순</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </section>

      {/* 상품 그리드 */}
      <section className="px-5 py-6">
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">전체 {products.length}개</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-3">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
                  <Heart className="w-4 h-4" />
                </button>
                {product.discount > 0 && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-black text-white rounded-full text-xs">
                    {product.discount}%
                  </div>
                )}
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">{product.brand}</p>
                <p className="text-sm mb-2 line-clamp-2">{product.name}</p>
                <div className="flex items-center gap-2">
                  {product.discount > 0 && (
                    <span className="text-xs text-muted-foreground line-through">
                      {product.price.toLocaleString()}원
                    </span>
                  )}
                  <span className="font-medium">
                    {Math.floor(product.price * (1 - product.discount / 100)).toLocaleString()}원
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
