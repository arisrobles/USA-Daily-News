import Link from 'next/link';
import { heroArticle, newsArticles } from '@/lib/data';
import AdPlaceholder from '@/components/ui/AdPlaceholder';

export default function Home() {
  const secondaryStories = newsArticles.slice(1, 4);
  const wellness = newsArticles.filter(a => a.category === "Health & Wellness");
  const money = newsArticles.filter(a => a.category === "Finance");
  const moreNews = newsArticles.slice(4, 10);
  const quickHits = newsArticles.slice(0, 5);

  return (
    <div className="news-container py-8">
      <div className="text-[10px] text-gray-300 uppercase mb-4 tracking-widest border-b border-gray-100 pb-2">Verified Newsroom Rendering</div>
      {/* Top Section: Hero + Trending */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 border-b-2 border-border pb-12">
        {/* Main Hero */}
        <div className="lg:col-span-3 space-y-6 border-r-0 lg:border-r border-border lg:pr-12">
          {heroArticle && (
            <Link href={`/news/${heroArticle.id}`} className="group block mb-12">
              <div className="relative h-[300px] md:h-[480px] w-full overflow-hidden mb-6 bg-gray-100">
                <img
                  src={heroArticle.image}
                  alt={heroArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-0 left-0">
                  <span className="category-label">{heroArticle.category}</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-4 group-hover:text-primary transition-colors leading-tight">
                {heroArticle.title}
              </h1>
              <p className="text-xl text-muted leading-relaxed mb-4 max-w-4xl">
                {heroArticle.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm font-bold uppercase text-muted">
                <span>By {heroArticle.author}</span>
                <span>•</span>
                <span>{heroArticle.date}</span>
              </div>
            </Link>
          )}

          {/* Secondary Headlines to fill space */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-border">
            {secondaryStories.map(article => (
              <Link key={article.id} href={`/news/${article.id}`} className="group block">
                <div className="aspect-video overflow-hidden mb-4">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <span className="text-xs font-bold text-secondary uppercase block mb-1">
                  {article.category}
                </span>
                <h3 className="text-xl font-serif font-bold group-hover:text-primary transition-colors leading-tight">
                  {article.title}
                </h3>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 mt-12 border-t border-border">
            <div className="space-y-6">
              <h4 className="font-black text-sm uppercase tracking-tighter border-b-2 border-primary inline-block mb-2">Quick Hits</h4>
              <ul className="space-y-4">
                {quickHits.map(hit => (
                  <li key={hit.id} className="border-b border-gray-100 pb-3 last:border-0">
                    <Link href={`/news/${hit.id}`} className="text-sm font-serif font-bold hover:text-primary transition-colors leading-tight block">
                      {hit.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-accent p-6 flex flex-col justify-center items-center text-center">
              <span className="text-[10px] font-black uppercase text-muted mb-2 tracking-widest">Editor's Choice</span>
              <h4 className="text-lg font-serif font-black leading-tight mb-4">Planning for 2026? Download our Retirement Checklist.</h4>
              <Link href="/contact" className="bg-primary text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-opacity-90">Get it Now</Link>
            </div>
          </div>
        </div>

        {/* Trending Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          <h2 className="text-xl font-bold uppercase tracking-widest border-b-2 border-secondary inline-block mb-6">
            Trending Today
          </h2>
          <div className="space-y-8">
            {newsArticles.slice(1, 4).map((article, idx) => (
              <Link key={article.id} href={`/news/${article.id}`} className="group block article-card pb-6">
                <span className="text-4xl font-serif font-black text-border leading-none block mb-2 group-hover:text-secondary transition-colors">
                  0{idx + 1}
                </span>
                <span className="text-xs font-bold text-secondary uppercase block mb-1">
                  {article.category}
                </span>
                <h3 className="text-xl font-serif font-bold group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
              </Link>
            ))}
          </div>

          <div className="bg-accent p-6 border-l-4 border-primary">
            <h3 className="font-bold text-sm uppercase mb-2">Subscribe Today</h3>
            <p className="text-xs mb-4">Unlimited digital access for just $1.</p>
            <Link href="/contact" className="text-primary font-black text-xs uppercase hover:underline">See Offers →</Link>
          </div>

          <div className="pt-8">
            <AdPlaceholder height={600} label="Premium Placement" />
          </div>
        </div>
      </div>

      <div className="py-12 border-b-2 border-border flex justify-center">
        <AdPlaceholder width={728} height={90} label="Leaderboard Ad" />
      </div>

      {/* Middle Section: Specific Categories */}
      <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-12 border-b-2 border-border pb-12">
        {/* Health & Wellness */}
        <div>
          <h2 className="text-2xl font-bold uppercase border-l-8 border-primary pl-4 mb-8">
            Health & Wellness
          </h2>
          <div className="space-y-10">
            {wellness.map(article => (
              <Link key={article.id} href={`/news/${article.id}`} className="group flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 aspect-video overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Money Section */}
        <div>
          <h2 className="text-2xl font-bold uppercase border-l-8 border-secondary pl-4 mb-8">
            Money & Retirement
          </h2>
          <div className="space-y-10">
            {money.map(article => (
              <Link key={article.id} href={`/news/${article.id}`} className="group flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 aspect-video overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section: Just In */}
      <div className="py-12">
        <h2 className="text-2xl font-bold uppercase border-b-4 border-black inline-block mb-10">
          More From Our Newsroom
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {moreNews.map(article => (
            <Link key={article.id} href={`/news/${article.id}`} className="group block">
              <div className="aspect-video overflow-hidden mb-4">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span className="text-xs font-bold text-primary uppercase block mb-1">
                {article.category}
              </span>
              <h3 className="text-2xl font-serif font-bold group-hover:text-primary transition-colors mb-2">
                {article.title}
              </h3>
              <p className="text-sm text-muted mb-4">
                {article.excerpt}
              </p>
              <span className="text-xs font-bold uppercase text-muted">By {article.author}</span>
            </Link>
          ))}
        </div>
      </div>
    </div >
  );
}
