import { SlidersHorizontal, Heart } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function CategoryPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedSort, setSelectedSort] = useState('인기순');

  const categories = ['전체', '상의', '하의', '아우터', '원피스', '신발', '가방', '악세서리'];
  const styleTags = ['데일리', '캠퍼스', '미니멀', '스트릿', '페미닌', '빈티지', '오피스'];
  const sortOptions = ['인기순', '최신순', '낮은가격순', '높은가격순', '할인율순'];

  const products = [
    {
      id: 1,
      name: '베이직 코튼 티셔츠',
      brand: 'DAILY BASIC',
      price: 29000,
      image: 'https://images.unsplash.com/photo-1629922944655-a4c0ae9e07f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
    {
      id: 2,
      name: '오버핏 블레이저',
      brand: 'MINIMALIST',
      price: 89000,
      originalPrice: 129000,
      discount: 31,
      image: 'https://images.unsplash.com/photo-1629922948950-08e61289569b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
    {
      id: 3,
      name: '플리츠 롱 스커트',
      brand: 'FEMININE',
      price: 52000,
      image: 'https://images.unsplash.com/photo-1664076458686-3449062080ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
    {
      id: 4,
      name: '데님 재킷',
      brand: 'STREET STUDIO',
      price: 69000,
      image: 'https://images.unsplash.com/photo-1778414519731-4c7bec35729e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
    {
      id: 5,
      name: '트렌치 코트',
      brand: 'URBAN CHIC',
      price: 159000,
      originalPrice: 229000,
      discount: 30,
      image: 'https://images.unsplash.com/photo-1618244965061-1d27b208d6e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
    {
      id: 6,
      name: '니트 가디건',
      brand: 'COZY KNIT',
      price: 38000,
      image: 'https://images.unsplash.com/photo-1629922952761-a27231b25b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 bg-white z-40 border-b border-gray-100">
        <div className="px-5 py-4">
          <h2 className="text-center">카테고리</h2>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto px-5 pb-3 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Style Tags */}
      <div className="px-5 py-4 border-b border-gray-100">
        <div className="flex gap-2 flex-wrap">
          {styleTags.map((tag) => (
            <button
              key={tag}
              className="px-3 py-1.5 border border-gray-200 rounded-full text-xs hover:border-gray-300 transition-colors"
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Filter & Sort */}
      <div className="sticky top-[116px] bg-white z-30 px-5 py-3 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-black transition-colors">
            <SlidersHorizontal size={16} />
            필터
          </button>
        </div>
        <div className="relative">
          <select
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
            className="text-sm text-gray-700 bg-transparent border-none outline-none cursor-pointer pr-2"
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="px-5 py-6">
        <p className="text-sm text-gray-500 mb-4">총 {products.length}개</p>
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="cursor-pointer"
            >
              <div className="relative aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-sm backdrop-blur-sm">
                  <Heart size={16} strokeWidth={1.5} />
                </button>
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-black text-white px-2 py-1 rounded-full text-xs">
                    {product.discount}%
                  </div>
                )}
              </div>
              <div className="space-y-1">
                <p className="text-xs text-gray-500">{product.brand}</p>
                <p className="text-sm line-clamp-1">{product.name}</p>
                <div className="flex items-center gap-2">
                  {product.originalPrice && (
                    <span className="text-xs text-gray-400 line-through">
                      {product.originalPrice.toLocaleString()}원
                    </span>
                  )}
                  <span className="text-base">{product.price.toLocaleString()}원</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
