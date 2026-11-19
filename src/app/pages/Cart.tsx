import { useState } from 'react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Trash2, ChevronRight, Tag } from 'lucide-react';

const initialCartItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1629922947773-ad0eff4ad420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGVkaXRvcmlhbCUyMHdvbWFufGVufDF8fHx8MTc3OTY2NDU3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'MINIMAL',
    name: '베이직 블랙 블레이저',
    option: 'Black / M',
    price: 75650,
    quantity: 1,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1664076458686-3449062080ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGVkaXRvcmlhbCUyMHdvbWFufGVufDF8fHx8MTc3OTY2NDU3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'AESTHETIC',
    name: '실루엣 원피스',
    option: 'Beige / S',
    price: 55200,
    quantity: 1,
  },
];

export function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [selectedItems, setSelectedItems] = useState<number[]>(cartItems.map((item) => item.id));

  const toggleSelectItem = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    setSelectedItems(
      selectedItems.length === cartItems.length ? [] : cartItems.map((item) => item.id)
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    setSelectedItems((prev) => prev.filter((itemId) => itemId !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const selectedTotal = cartItems
    .filter((item) => selectedItems.includes(item.id))
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  const deliveryFee = selectedTotal >= 50000 ? 0 : 3000;
  const finalTotal = selectedTotal + deliveryFee;

  return (
    <div className="pb-40 bg-white min-h-screen">
      {/* 헤더 */}
      <header className="sticky top-0 bg-white z-40 border-b border-border/50">
        <div className="px-5 py-4 flex items-center justify-between">
          <h1 className="tracking-tight">장바구니</h1>
          <span className="text-sm text-muted-foreground">{cartItems.length}개</span>
        </div>
      </header>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4">
            <span className="text-4xl">🛍️</span>
          </div>
          <p className="text-muted-foreground mb-6">장바구니가 비어있어요</p>
          <button className="px-6 py-3 bg-black text-white rounded-xl">
            쇼핑 계속하기
          </button>
        </div>
      ) : (
        <>
          {/* 전체 선택 */}
          <section className="px-5 py-4 border-b border-border/50">
            <button
              onClick={toggleSelectAll}
              className="flex items-center gap-2"
            >
              <div
                className={`w-5 h-5 border-2 rounded flex items-center justify-center ${
                  selectedItems.length === cartItems.length
                    ? 'border-black bg-black'
                    : 'border-border'
                }`}
              >
                {selectedItems.length === cartItems.length && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span className="text-sm">전체 선택</span>
            </button>
          </section>

          {/* 장바구니 아이템 */}
          <section className="px-5 py-4 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 pb-4 border-b border-border/50 last:border-0">
                <button
                  onClick={() => toggleSelectItem(item.id)}
                  className="flex-shrink-0 mt-1"
                >
                  <div
                    className={`w-5 h-5 border-2 rounded flex items-center justify-center ${
                      selectedItems.includes(item.id)
                        ? 'border-black bg-black'
                        : 'border-border'
                    }`}
                  >
                    {selectedItems.includes(item.id) && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                </button>

                <div className="w-24 h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{item.brand}</p>
                    <p className="text-sm mb-1 line-clamp-2">{item.name}</p>
                    <p className="text-xs text-muted-foreground mb-2">{item.option}</p>
                    <p className="font-medium">{item.price.toLocaleString()}원</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-border rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="w-10 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-8 h-8 flex items-center justify-center text-muted-foreground"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* 쿠폰 */}
          <section className="px-5 py-4 bg-secondary/30">
            <button className="w-full flex items-center justify-between p-4 bg-white rounded-xl">
              <div className="flex items-center gap-3">
                <Tag className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm">쿠폰 사용</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </section>

          {/* 결제 금액 */}
          <section className="px-5 py-6">
            <h3 className="mb-4">결제 금액</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">상품 금액</span>
                <span>{selectedTotal.toLocaleString()}원</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">배송비</span>
                <span>{deliveryFee === 0 ? '무료' : `${deliveryFee.toLocaleString()}원`}</span>
              </div>
              {deliveryFee > 0 && (
                <p className="text-xs text-muted-foreground">
                  {(50000 - selectedTotal).toLocaleString()}원 추가 시 무료배송
                </p>
              )}
              <div className="pt-3 border-t border-border flex items-center justify-between">
                <span>총 결제 금액</span>
                <span className="text-xl font-medium">{finalTotal.toLocaleString()}원</span>
              </div>
            </div>
          </section>
        </>
      )}

      {/* 하단 구매 버튼 */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-20 left-0 right-0 bg-white border-t border-border z-40">
          <div className="px-5 py-4 max-w-md mx-auto">
            <button
              disabled={selectedItems.length === 0}
              className="w-full py-4 bg-black text-white rounded-xl disabled:bg-muted disabled:text-muted-foreground"
            >
              {selectedItems.length > 0
                ? `${selectedItems.length}개 상품 구매하기`
                : '상품을 선택해주세요'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
