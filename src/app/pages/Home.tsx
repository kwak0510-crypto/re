import { ImageWithFallback } from '../components/ImageWithFallback';
import { ChevronRight, Heart, Star } from 'lucide-react';

const bannerImage = 'https://images.unsplash.com/photo-1647218947427-d783309440d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBmYXNoaW9uJTIwd29tYW4lMjBzdHJlZXQlMjBzdHlsZSUyMGNhc3VhbHxlbnwxfHx8fDE3Nzk2NjQ1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080';

const trendKeywords = ['데일리룩', '캠퍼스룩', '미니멀', '스트릿', '오피스룩', '데이트룩'];

const products = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1629922947773-ad0eff4ad420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGVkaXRvcmlhbCUyMHdvbWFufGVufDF8fHx8MTc3OTY2NDU3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'MINIMAL',
    name: '베이직 블랙 블레이저',
    price: 89000,
    discount: 15,
    rating: 4.8,
    reviews: 234,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1664076458686-3449062080ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGVkaXRvcmlhbCUyMHdvbWFufGVufDF8fHx8MTc3OTY2NDU3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'AESTHETIC',
    name: '실루엣 원피스',
    price: 69000,
    discount: 20,
    rating: 4.9,
    reviews: 567,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1629922948950-08e61289569b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGVkaXRvcmlhbCUyMHdvbWFufGVufDF8fHx8MTc3OTY2NDU3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'DAILY',
    name: '세미 오버핏 재킷',
    price: 79000,
    discount: 10,
    rating: 4.7,
    reviews: 189,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1629922954496-c53253aeadfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGVkaXRvcmlhbCUyMHdvbWFufGVufDF8fHx8MTc3OTY2NDU3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'MOOD',
    name: '롱 코트 블랙',
    price: 129000,
    discount: 25,
    rating: 5.0,
    reviews: 423,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1601762603339-fd61e28b698a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGVkaXRvcmlhbCUyMHdvbWFufGVufDF8fHx8MTc3OTY2NDU3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'MODERN',
    name: '니트 베스트',
    price: 45000,
    discount: 0,
    rating: 4.6,
    reviews: 156,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1629922952761-a27231b25b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGVkaXRvcmlhbCUyMHdvbWFufGVufDF8fHx8MTc3OTY2NDU3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'STYLE',
    name: '세미 플레어 스커트',
    price: 52000,
    discount: 15,
    rating: 4.8,
    reviews: 301,
  },
];

const influencerStyles = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1778414519731-4c7bec35729e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxrb3JlYW4lMjBmYXNoaW9uJTIwd29tYW4lMjBzdHJlZXQlMjBzdHlsZSUyMGNhc3VhbHxlbnwxfHx8fDE3Nzk2NjQ1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    influencer: '@minjoo_style',
    title: '봄 데님 스타일링',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1635196060194-5a09144cab4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxrb3JlYW4lMjBmYXNoaW9uJTIwd29tYW4lMjBzdHJlZXQlMjBzdHlsZSUyMGNhc3VhbHxlbnwxfHx8fDE3Nzk2NjQ1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    influencer: '@yuna_daily',
    title: '캠퍼스 무드',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1677419424166-a65d8aec0d51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8a29yZWFuJTIwZmFzaGlvbiUyMHdvbWFuJTIwc3RyZWV0JTIwc3R5bGUlMjBjYXN1YWx8ZW58MXx8fHwxNzc5NjY0NTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    influencer: '@sora_ootd',
    title: '여름 원피스 룩',
  },
];

export function Home() {
  return (
    <div className="pb-20 bg-white">
      {/* 헤더 */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-40 border-b border-border/50">
        <div className="px-5 py-4 flex items-center justify-between">
          <h1 className="tracking-tight">LUNE</h1>
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* 메인 배너 */}
      <section className="relative h-[500px] overflow-hidden">
        <ImageWithFallback
          src={bannerImage}
          alt="메인 배너"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-8 left-5 text-white">
          <p className="text-sm tracking-wide mb-2">2026 SPRING COLLECTION</p>
          <h2 className="text-3xl tracking-tight mb-3">New Arrivals</h2>
          <button className="px-6 py-2.5 bg-white text-black rounded-full text-sm hover:bg-white/90 transition-colors">
            컬렉션 보기
          </button>
        </div>
      </section>

      {/* 트렌드 키워드 */}
      <section className="px-5 py-6 border-b border-border/50">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm">실시간 트렌드</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {trendKeywords.map((keyword, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-secondary rounded-full text-sm hover:bg-muted transition-colors"
            >
              #{keyword}
            </button>
          ))}
        </div>
      </section>

      {/* 오늘의 추천 코디 */}
      <section className="px-5 py-8">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="mb-1">오늘의 코디 추천</h3>
            <p className="text-sm text-muted-foreground">스타일리스트가 제안하는 데일리룩</p>
          </div>
          <button className="flex items-center gap-1 text-sm text-muted-foreground">
            전체보기
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide -mx-5 px-5">
          {influencerStyles.map((style) => (
            <div key={style.id} className="flex-shrink-0 w-48">
              <div className="relative rounded-2xl overflow-hidden mb-3 aspect-[3/4]">
                <ImageWithFallback
                  src={style.image}
                  alt={style.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-muted-foreground mb-1">{style.influencer}</p>
              <p className="text-sm">{style.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 실시간 인기 상품 */}
      <section className="px-5 py-8 bg-secondary/30">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="mb-1">실시간 인기 상품</h3>
            <p className="text-sm text-muted-foreground">지금 가장 많이 찾는 아이템</p>
          </div>
          <button className="flex items-center gap-1 text-sm text-muted-foreground">
            더보기
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="relative aspect-[3/4] overflow-hidden">
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
              <div className="p-3">
                <p className="text-xs text-muted-foreground mb-1">{product.brand}</p>
                <p className="text-sm mb-2 line-clamp-1">{product.name}</p>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs">{product.rating}</span>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>
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

      {/* 브랜드 큐레이션 */}
      <section className="px-5 py-8">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="mb-1">주목할 브랜드</h3>
            <p className="text-sm text-muted-foreground">감각적인 브랜드를 만나보세요</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {['MINIMAL', 'AESTHETIC', 'DAILY', 'MOOD', 'MODERN', 'STYLE'].map((brand) => (
            <button
              key={brand}
              className="aspect-square bg-secondary rounded-2xl flex items-center justify-center hover:bg-muted transition-colors"
            >
              <span className="text-sm tracking-wide">{brand}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
