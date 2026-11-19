import { useState } from 'react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { ChevronLeft, Heart, Share2, Star, ChevronRight, Truck, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router';

const productImages = [
  'https://images.unsplash.com/photo-1629922947773-ad0eff4ad420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGVkaXRvcmlhbCUyMHdvbWFufGVufDF8fHx8MTc3OTY2NDU3NXww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1629922948950-08e61289569b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGVkaXRvcmlhbCUyMHdvbWFufGVufDF8fHx8MTc3OTY2NDU3NXww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1629922954496-c53253aeadfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGVkaXRvcmlhbCUyMHdvbWFufGVufDF8fHx8MTc3OTY2NDU3NXww&ixlib=rb-4.1.0&q=80&w=1080',
];

const sizes = ['S', 'M', 'L', 'XL'];
const colors = [
  { name: 'Black', hex: '#000000' },
  { name: 'Beige', hex: '#D4C5B9' },
  { name: 'Navy', hex: '#1C3144' },
];

const relatedProducts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1664076458686-3449062080ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGVkaXRvcmlhbCUyMHdvbWFufGVufDF8fHx8MTc3OTY2NDU3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    name: '실루엣 원피스',
    price: 69000,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1601762603339-fd61e28b698a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGVkaXRvcmlhbCUyMHdvbWFufGVufDF8fHx8MTc3OTY2NDU3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    name: '니트 베스트',
    price: 45000,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1629922952761-a27231b25b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGVkaXRvcmlhbCUyMHdvbWFufGVufDF8fHx8MTc3OTY2NDU3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    name: '플레어 스커트',
    price: 52000,
  },
];

export function ProductDetail() {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="pb-24 bg-white">
      {/* 헤더 */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-border/50">
        <div className="px-5 py-4 flex items-center justify-between max-w-md mx-auto">
          <button onClick={() => navigate(-1)} className="w-9 h-9 flex items-center justify-center">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 flex items-center justify-center">
              <Share2 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="w-9 h-9 flex items-center justify-center"
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* 이미지 캐러셀 */}
      <section className="relative mt-[57px]">
        <div className="aspect-[3/4] overflow-hidden">
          <ImageWithFallback
            src={productImages[currentImage]}
            alt="상품 이미지"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
          {productImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                currentImage === index ? 'w-6 bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* 상품 정보 */}
      <section className="px-5 py-6">
        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-2">MINIMAL</p>
          <h2 className="text-xl mb-3">베이직 블랙 블레이저</h2>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">4.8</span>
            </div>
            <span className="text-sm text-muted-foreground">(234개 리뷰)</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground line-through">89,000원</span>
            <span className="text-2xl">75,650원</span>
            <span className="px-2 py-1 bg-red-500 text-white text-xs rounded">15%</span>
          </div>
        </div>

        {/* 사이즈 선택 */}
        <div className="mb-6">
          <p className="text-sm mb-3">사이즈</p>
          <div className="flex gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`flex-1 py-3 border rounded-lg transition-colors ${
                  selectedSize === size
                    ? 'border-black bg-black text-white'
                    : 'border-border hover:border-muted-foreground'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* 컬러 선택 */}
        <div className="mb-6">
          <p className="text-sm mb-3">컬러</p>
          <div className="flex gap-3">
            {colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(index)}
                className={`w-12 h-12 rounded-full border-2 transition-all ${
                  selectedColor === index ? 'border-black scale-110' : 'border-border'
                }`}
                style={{ backgroundColor: color.hex }}
              />
            ))}
          </div>
        </div>

        {/* 배송 정보 */}
        <div className="border-t border-b border-border py-4 space-y-3">
          <div className="flex items-center gap-3">
            <Truck className="w-5 h-5 text-muted-foreground" />
            <div className="flex-1">
              <p className="text-sm">무료배송</p>
              <p className="text-xs text-muted-foreground">2-3일 내 도착</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <RotateCcw className="w-5 h-5 text-muted-foreground" />
            <div className="flex-1">
              <p className="text-sm">무료 반품</p>
              <p className="text-xs text-muted-foreground">30일 이내</p>
            </div>
          </div>
        </div>
      </section>

      {/* 상품 설명 */}
      <section className="px-5 py-6 bg-secondary/30">
        <h3 className="mb-4">상품 설명</h3>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>데일리로 입기 좋은 베이직 블레이저입니다.</p>
          <p>세미 오버핏으로 편안하게 착용 가능하며, 어떤 스타일과도 잘 어울립니다.</p>
          <p>고급스러운 원단으로 제작되어 오래 입을 수 있습니다.</p>
        </div>
        <div className="mt-6 space-y-2 text-sm">
          <div className="flex">
            <span className="w-24 text-muted-foreground">소재</span>
            <span>울 70%, 폴리에스터 30%</span>
          </div>
          <div className="flex">
            <span className="w-24 text-muted-foreground">세탁</span>
            <span>드라이클리닝 권장</span>
          </div>
          <div className="flex">
            <span className="w-24 text-muted-foreground">원산지</span>
            <span>대한민국</span>
          </div>
        </div>
      </section>

      {/* 함께하면 좋은 상품 */}
      <section className="px-5 py-8">
        <div className="flex items-center justify-between mb-5">
          <h3>함께하면 좋은 상품</h3>
          <button className="flex items-center gap-1 text-sm text-muted-foreground">
            전체보기
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide -mx-5 px-5">
          {relatedProducts.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-36">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-2">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm mb-1 line-clamp-2">{product.name}</p>
              <p className="font-medium text-sm">{product.price.toLocaleString()}원</p>
            </div>
          ))}
        </div>
      </section>

      {/* 하단 구매 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border z-40">
        <div className="px-5 py-4 flex gap-3 max-w-md mx-auto">
          <button className="flex-1 py-4 bg-secondary rounded-xl hover:bg-muted transition-colors">
            장바구니
          </button>
          <button className="flex-1 py-4 bg-black text-white rounded-xl hover:bg-black/90 transition-colors">
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
}
