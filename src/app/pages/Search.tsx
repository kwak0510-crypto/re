import { useState } from 'react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Search as SearchIcon, X, TrendingUp, Clock } from 'lucide-react';

const trendingKeywords = [
  { keyword: '블레이저', rank: 1 },
  { keyword: '원피스', rank: 2 },
  { keyword: '미니스커트', rank: 3 },
  { keyword: '니트', rank: 4 },
  { keyword: '청바지', rank: 5 },
  { keyword: '트렌치코트', rank: 6 },
  { keyword: '로퍼', rank: 7 },
  { keyword: '크로스백', rank: 8 },
];

const recentSearches = [
  '블랙 블레이저',
  '데일리룩',
  '캠퍼스룩',
  '미니멀 원피스',
];

const styleRecommendations = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1778414519731-4c7bec35729e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxrb3JlYW4lMjBmYXNoaW9uJTIwd29tYW4lMjBzdHJlZXQlMjBzdHlsZSUyMGNhc3VhbHxlbnwxfHx8fDE3Nzk2NjQ1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: '봄 데님 룩',
    tag: '#데일리',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1635196060194-5a09144cab4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxrb3JlYW4lMjBmYXNoaW9uJTIwd29tYW4lMjBzdHJlZXQlMjBzdHlsZSUyMGNhc3VhbHxlbnwxfHx8fDE3Nzk2NjQ1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: '캠퍼스 무드',
    tag: '#캠퍼스',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1677419424166-a65d8aec0d51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8a29yZWFuJTIwZmFzaGlvbiUyMHdvbWFuJTIwc3RyZWV0JTIwc3R5bGUlMjBjYXN1YWx8ZW58MXx8fHwxNzc5NjY0NTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: '여름 원피스',
    tag: '#데이트',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1747643561782-a67910ab3d6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxrb3JlYW4lMjBmYXNoaW9uJTIwd29tYW4lMjBzdHJlZXQlMjBzdHlsZSUyMGNhc3VhbHxlbnwxfHx8fDE3Nzk2NjQ1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: '미니멀 스타일',
    tag: '#오피스',
  },
];

export function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="pb-20 bg-white min-h-screen">
      {/* 검색바 */}
      <header className="sticky top-0 bg-white z-40 border-b border-border/50">
        <div className="px-5 py-4">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="어떤 스타일을 찾으세요?"
              className="w-full pl-12 pr-12 py-3 bg-secondary rounded-full outline-none focus:ring-2 focus:ring-ring/20"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* 최근 검색어 */}
      {recentSearches.length > 0 && (
        <section className="px-5 py-6 border-b border-border/50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-sm">최근 검색어</h3>
            </div>
            <button className="text-xs text-muted-foreground">전체 삭제</button>
          </div>
          <div className="flex flex-wrap gap-2">
            {recentSearches.map((search, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-secondary rounded-full text-sm hover:bg-muted transition-colors flex items-center gap-2"
              >
                <span>{search}</span>
                <X className="w-3 h-3" />
              </button>
            ))}
          </div>
        </section>
      )}

      {/* 인기 검색어 */}
      <section className="px-5 py-6 border-b border-border/50">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-4 h-4 text-muted-foreground" />
          <h3 className="text-sm">실시간 인기 검색어</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {trendingKeywords.map((item) => (
            <button
              key={item.rank}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors text-left"
            >
              <span className="text-sm font-medium w-5">{item.rank}</span>
              <span className="text-sm flex-1">{item.keyword}</span>
            </button>
          ))}
        </div>
      </section>

      {/* 스타일 추천 */}
      <section className="px-5 py-8">
        <div className="mb-5">
          <h3 className="mb-1">AI 스타일 추천</h3>
          <p className="text-sm text-muted-foreground">당신을 위한 맞춤 스타일</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {styleRecommendations.map((style) => (
            <div key={style.id} className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-2">
                <ImageWithFallback
                  src={style.image}
                  alt={style.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs mb-1 opacity-80">{style.tag}</p>
                  <p className="text-sm">{style.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 추천 키워드 */}
      <section className="px-5 py-6 bg-secondary/30">
        <h3 className="mb-4 text-sm">이런 키워드는 어때요?</h3>
        <div className="flex flex-wrap gap-2">
          {[
            '스트릿패션',
            '오피스룩',
            '레이어드',
            '빈티지',
            '캐주얼',
            '페미닌',
            '모던',
            '클래식',
          ].map((keyword, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-white rounded-full text-sm hover:bg-muted transition-colors"
            >
              #{keyword}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
