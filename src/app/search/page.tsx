"use client";

import { useSearchParams } from 'next/navigation';
import { newsArticles } from '@/lib/data';
import Link from 'next/link';
import AdPlaceholder from '@/components/ui/AdPlaceholder';
import { Suspense } from 'react';

function SearchContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';

    const results = newsArticles.filter(article =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        article.category.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="news-container py-12">
            <div className="mb-12 border-b-8 border-primary pb-4">
                <span className="text-xs font-black uppercase tracking-widest text-muted">Search Results For:</span>
                <h1 className="text-5xl font-serif font-black uppercase tracking-tighter block mt-2">
                    "{query}"
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                <div className="lg:col-span-3 space-y-12">
                    {results.length > 0 ? (
                        <>
                            <p className="text-sm font-bold text-muted uppercase tracking-widest mb-8">
                                Found {results.length} articles matching your search
                            </p>
                            {results.map(article => (
                                <Link key={article.id} href={`/news/${article.id}`} className="group grid grid-cols-1 md:grid-cols-3 gap-8 article-card pb-12">
                                    <div className="md:col-span-1 aspect-video overflow-hidden rounded-sm">
                                        <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="category-label text-[10px]">{article.category}</span>
                                            <span className="text-[10px] font-bold text-muted uppercase tracking-widest">{article.date}</span>
                                        </div>
                                        <h2 className="text-3xl font-serif font-bold group-hover:text-primary transition-colors mb-4 leading-tight">
                                            {article.title}
                                        </h2>
                                        <p className="text-muted leading-relaxed line-clamp-3">
                                            {article.excerpt}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </>
                    ) : (
                        <div className="py-20 text-center bg-accent border border-dashed border-border rounded-sm">
                            <h2 className="text-2xl font-serif font-black mb-4">No results found for "{query}"</h2>
                            <p className="text-muted mb-8 max-w-md mx-auto">We couldn't find any articles matching your search. Try searching for broader terms like "Medicare" or "Retirement".</p>
                            <Link href="/" className="bg-primary text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-opacity-90">
                                Return to Homepage
                            </Link>
                        </div>
                    )}
                </div>

                <div className="lg:col-span-1 space-y-10">
                    <AdPlaceholder height={600} label="Sidebar Ad" />

                    <div className="bg-primary text-white p-8 rounded-sm">
                        <h3 className="text-xl font-serif font-black mb-4">Daily Intelligence</h3>
                        <p className="text-sm mb-6 opacity-90 leading-relaxed">
                            Don't miss a single headline. Join 50,000+ readers who stay ahead with our daily report.
                        </p>
                        <input type="email" placeholder="Email address" className="w-full px-4 py-2 text-black mb-4 focus:outline-none" />
                        <button className="w-full bg-white text-primary font-bold py-2 uppercase tracking-widest text-xs hover:bg-opacity-90">
                            Subscribe
                        </button>
                    </div>

                    <AdPlaceholder height={250} label="Market Update Ad" />
                </div>
            </div>
        </div>
    );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<div className="news-container py-20 text-center">Loading search results...</div>}>
            <SearchContent />
        </Suspense>
    );
}
