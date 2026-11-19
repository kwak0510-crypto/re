import { Heart, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function HomePage() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: '미니멀 크롭 블레이저',
      brand: 'MINIMALIST',
      price: 89000,
      originalPrice: 129000,
      image: 'https://images.unsplash.com/photo-1629922948950-08e61289569b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      discount: 31,
    },
    {
      id: 2,
      name: '캐주얼 데님 재킷',
      brand: 'STREET STUDIO',
      price: 69000,
      image: 'https://images.unsplash.com/photo-1778414519731-4c7bec35729e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
    {
      id: 3,
      name: '에센셜 화이트 셔츠',
      brand: 'BASIC EDITION',
      price: 45000,
      originalPrice: 65000,
      image: 'https://images.unsplash.com/photo-1629922944655-a4c0ae9e07f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      discount: 30,
    },
    {
      id: 4,
      name: '플리츠 미디 스커트',
      brand: 'FEMININE',
      price: 52000,
      image: 'https://images.unsplash.com/photo-1664076458686-3449062080ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
    {
      id: 5,
      name: '오버핏 트렌치 코트',
      brand: 'URBAN CHIC',
      price: 159000,
      originalPrice: 229000,
      image: 'https://images.unsplash.com/photo-1618244965061-1d27b208d6e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      discount: 30,
    },
    {
      id: 6,
      name: '베이직 니트 가디건',
      brand: 'COZY KNIT',
      price: 38000,
      image: 'https://images.unsplash.com/photo-1629922952761-a27231b25b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    },
  ];

  const trendingKeywords = [
    '데일리룩', '캠퍼스룩', '미니멀', '스트릿', '빈티지', '오피스룩'
  ];

  const collections = [
    {
      title: 'Spring Essential',
      subtitle: '봄을 위한 베이직 컬렉션',
      image: 'https://images.unsplash.com/photo-1647218947427-d783309440d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200',
    },
    {
      title: 'Street Casual',
      subtitle: '감각적인 스트릿 스타일',
      image: 'https://images.unsplash.com/photo-1597157051516-19c5bf8ae971?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Main Banner */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1601762603339-fd61e28b698a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200"
          alt="Main Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-8 left-6 text-white">
          <p className="text-sm mb-2 tracking-wide">NEW COLLECTION</p>
          <h1 className="text-3xl mb-2 tracking-tight">Spring Mood</h1>
          <p className="text-sm opacity-90">감성적인 봄 스타일 제안</p>
        </div>
      </div>

      {/* Trending Keywords */}
      <div className="px-5 py-6">
        <h3 className="mb-4">실시간 트렌드</h3>
        <div className="flex gap-2 flex-wrap">
          {trendingKeywords.map((keyword) => (
            <button
              key={keyword}
              className="px-4 py-2 bg-gray-50 rounded-full text-sm hover:bg-gray-100 transition-colors"
            >
              #{keyword}
            </button>
          ))}
        </div>
      </div>

      {/* Collections */}
      <div className="px-5 py-4">
        <div className="flex items-center justify-between mb-4">
          <h3>시즌 컬렉션</h3>
          <button className="text-sm text-gray-500 flex items-center gap-1">
            전체보기
            <ChevronRight size={16} />
          </button>
        </div>
        <div className="space-y-4">
          {collections.map((collection, idx) => (
            <div key={idx} className="relative h-48 rounded-2xl overflow-hidden">
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-5 left-5 text-white">
                <h4 className="mb-1">{collection.title}</h4>
                <p className="text-sm opacity-90">{collection.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Today's Picks */}
      <div className="px-5 py-6">
        <div className="flex items-center justify-between mb-4">
          <h3>오늘의 추천</h3>
          <button className="text-sm text-gray-500 flex items-center gap-1">
            전체보기
            <ChevronRight size={16} />
          </button>
        </div>
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

      {/* Influencer Style */}
      <div className="px-5 py-6 bg-gray-50">
        <h3 className="mb-4">인플루언서 스타일</h3>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide">
          {[
            'https://images.unsplash.com/photo-1635196060194-5a09144cab4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
            'https://images.unsplash.com/photo-1677419424166-a65d8aec0d51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
            'https://images.unsplash.com/photo-1636451245750-0524be21a282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
            'https://images.unsplash.com/photo-1775193849854-ac1ea80c567a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
          ].map((img, idx) => (
            <div key={idx} className="flex-shrink-0 w-40">
              <div className="aspect-[3/4] bg-white rounded-2xl overflow-hidden mb-2">
                <img src={img} alt={`Style ${idx + 1}`} className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-gray-600">@influencer_{idx + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
