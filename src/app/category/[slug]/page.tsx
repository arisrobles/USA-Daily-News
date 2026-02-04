import { newsArticles } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import AdPlaceholder from '@/components/ui/AdPlaceholder';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Map slugs to category names in data.ts
    const categoryMap: { [key: string]: string } = {
        'nation': 'Nation',
        'health': 'Health & Wellness',
        'money': 'Finance',
        'travel': 'Travel',
        'life': 'Lifestyle',
        'home-garden': 'Home & Garden'
    };

    const categoryName = categoryMap[slug];

    if (!categoryName) {
        notFound();
    }

    const articles = newsArticles.filter(a => a.category === categoryName);

    return (
        <div className="news-container py-12">
            <div className="flex items-center gap-4 mb-12">
                <h1 className="text-5xl font-serif font-black uppercase tracking-tighter border-b-8 border-primary inline-block">
                    {categoryName}
                </h1>
                <div className="flex-grow border-t-2 border-border mt-4"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                <div className="lg:col-span-3 space-y-12">
                    {articles.length > 0 ? (
                        articles.map(article => (
                            <Link key={article.id} href={`/news/${article.id}`} className="group grid grid-cols-1 md:grid-cols-3 gap-8 article-card pb-12">
                                <div className="md:col-span-1 aspect-video overflow-hidden rounded-sm">
                                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="md:col-span-2">
                                    <span className="text-xs font-bold text-primary uppercase block mb-2">{article.date}</span>
                                    <h2 className="text-3xl font-serif font-bold group-hover:text-primary transition-colors mb-4 leading-tight">
                                        {article.title}
                                    </h2>
                                    <p className="text-muted leading-relaxed line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="py-20 text-center bg-accent border border-dashed border-border">
                            <p className="text-xl font-serif italic text-muted">No articles found in this category yet. Check back soon for updates.</p>
                        </div>
                    )}
                </div>

                <div className="lg:col-span-1 space-y-10">
                    <AdPlaceholder height={600} label="Sidebar Ad" />

                    <div className="bg-primary text-white p-8 rounded-sm">
                        <h3 className="text-xl font-serif font-black mb-4">Stay Informed</h3>
                        <p className="text-sm mb-6 opacity-90 leading-relaxed">
                            Get the latest {categoryName} updates delivered to your inbox every morning.
                        </p>
                        <input type="email" placeholder="Email address" className="w-full px-4 py-2 text-black mb-4 focus:outline-none" />
                        <button className="w-full bg-secondary bg-white text-primary font-bold py-2 uppercase tracking-widest text-xs hover:bg-opacity-90">
                            Subscribe
                        </button>
                    </div>

                    <AdPlaceholder height={250} label="Market Update Ad" />
                </div>
            </div>
        </div>
    );
}
