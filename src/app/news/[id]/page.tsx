import { newsArticles } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Share2, MessageCircle, Bookmark, Printer } from 'lucide-react';
import AdPlaceholder from '@/components/ui/AdPlaceholder';

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const article = newsArticles.find((a) => a.id === id);

    if (!article) {
        notFound();
    }

    const relatedArticles = newsArticles.filter(a => a.id !== article.id).slice(0, 3);

    return (
        <div className="bg-white">
            {/* Article Header */}
            <div className="news-container py-12 max-w-4xl">
                {(() => {
                    const slugMap: { [key: string]: string } = {
                        'Nation': 'nation',
                        'Health & Wellness': 'health',
                        'Finance': 'money',
                        'Travel': 'travel',
                        'Lifestyle': 'life',
                        'Home & Garden': 'home-garden'
                    };
                    const slug = slugMap[article.category] || 'nation';
                    return <Link href={`/category/${slug}`} className="category-label mb-6">{article.category}</Link>;
                })()}
                <h1 className="text-4xl md:text-6xl font-serif font-black mb-6 leading-tight">
                    {article.title}
                </h1>
                <p className="text-xl md:text-2xl text-muted italic mb-8 border-l-4 border-secondary pl-6">
                    {article.excerpt}
                </p>

                <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-y border-border gap-6">
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                            {article.author.charAt(0)}
                        </div>
                        <div>
                            <p className="font-bold text-lg leading-none">{article.author}</p>
                            <p className="text-sm text-muted font-semibold mt-1 uppercase tracking-wider">
                                {article.date} • {article.readTime}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button className="p-2 border border-border rounded-full hover:bg-accent transition-colors">
                            <Share2 className="h-5 w-5" />
                        </button>
                        <button className="p-2 border border-border rounded-full hover:bg-accent transition-colors">
                            <MessageCircle className="h-5 w-5" />
                        </button>
                        <button className="p-2 border border-border rounded-full hover:bg-accent transition-colors">
                            <Bookmark className="h-5 w-5" />
                        </button>
                        <button className="p-2 border border-border rounded-full hover:bg-accent transition-colors">
                            <Printer className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Image */}
            <div className="news-container mb-12">
                <div className="aspect-[21/9] w-full overflow-hidden rounded-sm">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <p className="text-xs text-muted mt-2 font-semibold uppercase tracking-widest text-right">
                    Photo: Getty Images / Daily News Feed
                </p>
            </div>

            {/* Article Content & Sidebar */}
            <div className="news-container grid grid-cols-1 lg:grid-cols-4 gap-12 pb-20">
                <div className="lg:col-span-3">
                    <article
                        className="prose prose-lg lg:prose-xl font-serif text-gray-800 leading-relaxed max-w-none"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    <div className="mt-16 p-8 bg-accent border border-border rounded-sm">
                        <h3 className="text-2xl font-serif font-black mb-4">Inside Our Journalism</h3>
                        <p className="text-sm text-muted leading-relaxed mb-6">
                            Everything we publish is verified by our editorial team. As an independent newsroom, our only loyalty is to our readers. Support our work by becoming a subscriber today.
                        </p>
                        <button className="bg-primary text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all rounded-sm">
                            View Subscription Options
                        </button>
                    </div>
                </div>

                {/* Sidebar Ads */}
                <div className="lg:col-span-1 space-y-8">
                    <AdPlaceholder height={600} label="Sidebar Ad" />
                    <div className="bg-gray-50 p-6 border border-border">
                        <h3 className="font-bold text-xs uppercase mb-4 text-center">Sponsored Content</h3>
                        <div className="space-y-6">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="aspect-video bg-gray-200 mb-2 overflow-hidden">
                                        <div className="w-full h-full bg-gray-300 animate-pulse"></div>
                                    </div>
                                    <h4 className="text-sm font-bold leading-tight group-hover:text-primary">
                                        Surprising News Every American Over 60 Should Read Immediately
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </div>
                    <AdPlaceholder height={250} label="Ad Slot" />
                </div>
            </div>

            {/* Related News */}
            <div className="bg-accent py-20 border-t border-border">
                <div className="news-container">
                    <h2 className="text-3xl font-serif font-black mb-12 uppercase tracking-tighter">More In {article.category}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {relatedArticles.map(rel => (
                            <Link key={rel.id} href={`/news/${rel.id}`} className="group block">
                                <div className="aspect-video overflow-hidden mb-4">
                                    <img src={rel.image} alt={rel.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <h3 className="text-xl font-serif font-bold group-hover:text-primary transition-colors leading-tight">
                                    {rel.title}
                                </h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
