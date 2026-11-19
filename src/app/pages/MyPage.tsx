import { ChevronRight, Package, Heart, Clock, Gift, CreditCard, Bell, HelpCircle, Settings } from 'lucide-react';

const orderStats = [
  { label: '결제대기', count: 0, icon: CreditCard },
  { label: '배송준비', count: 1, icon: Package },
  { label: '배송중', count: 2, icon: Package },
  { label: '배송완료', count: 5, icon: Package },
];

const menuItems = [
  {
    title: '쇼핑',
    items: [
      { icon: Package, label: '주문내역', badge: null },
      { icon: Heart, label: '찜한 상품', badge: 24 },
      { icon: Clock, label: '최근 본 상품', badge: null },
    ],
  },
  {
    title: '혜택',
    items: [
      { icon: Gift, label: '쿠폰', badge: 3 },
      { icon: CreditCard, label: '포인트', badge: '12,500P' },
    ],
  },
  {
    title: '설정',
    items: [
      { icon: Bell, label: '알림 설정', badge: null },
      { icon: HelpCircle, label: '고객센터', badge: null },
      { icon: Settings, label: '설정', badge: null },
    ],
  },
];

export function MyPage() {
  return (
    <div className="pb-20 bg-white min-h-screen">
      {/* 헤더 */}
      <header className="sticky top-0 bg-white z-40 border-b border-border/50">
        <div className="px-5 py-4">
          <h1 className="tracking-tight">마이</h1>
        </div>
      </header>

      {/* 프로필 */}
      <section className="px-5 py-8 border-b border-border/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">👤</span>
            </div>
            <div>
              <h2 className="mb-1">김루네님</h2>
              <p className="text-sm text-muted-foreground">lune@example.com</p>
            </div>
          </div>
          <button className="px-4 py-2 border border-border rounded-lg text-sm hover:bg-secondary transition-colors">
            프로필 수정
          </button>
        </div>
      </section>

      {/* 회원 등급 */}
      <section className="px-5 py-6 bg-gradient-to-r from-pink-50 to-purple-50 border-b border-border/50">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-sm">SILVER 회원</span>
            <span className="px-2 py-0.5 bg-white rounded-full text-xs">다음달 GOLD 예정</span>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </div>
        <div className="w-full h-2 bg-white rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-pink-400 to-purple-400" style={{ width: '70%' }} />
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          GOLD 회원까지 45,000원 남았어요
        </p>
      </section>

      {/* 주문 현황 */}
      <section className="px-5 py-6 border-b border-border/50">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm">주문 현황</h3>
          <button className="flex items-center gap-1 text-sm text-muted-foreground">
            전체보기
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {orderStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <button
                key={stat.label}
                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-secondary transition-colors"
              >
                <div className="relative">
                  <Icon className="w-6 h-6 text-muted-foreground" />
                  {stat.count > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
                      {stat.count}
                    </span>
                  )}
                </div>
                <span className="text-xs text-center">{stat.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 메뉴 섹션들 */}
      {menuItems.map((section, index) => (
        <section key={index} className="px-5 py-6 border-b border-border/50">
          <h3 className="text-sm mb-4">{section.title}</h3>
          <div className="space-y-1">
            {section.items.map((item, itemIndex) => {
              const Icon = item.icon;
              return (
                <button
                  key={itemIndex}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span className="text-sm text-muted-foreground">{item.badge}</span>
                    )}
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      ))}

      {/* 앱 정보 */}
      <section className="px-5 py-6">
        <div className="space-y-3 text-sm text-muted-foreground">
          <button className="flex items-center justify-between w-full p-2">
            <span>버전 정보</span>
            <span>v1.0.0</span>
          </button>
          <button className="flex items-center justify-between w-full p-2">
            <span>이용약관</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          <button className="flex items-center justify-between w-full p-2">
            <span>개인정보 처리방침</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 로그아웃 */}
      <section className="px-5 py-6">
        <button className="w-full py-3 text-sm text-muted-foreground">
          로그아웃
        </button>
      </section>
    </div>
  );
}
