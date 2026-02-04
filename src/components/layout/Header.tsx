"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, User, Bell, X, ArrowRight } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
            setIsSearchOpen(false);
        }
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        setSearchQuery("");
    };

    const categories = [
        { name: "Nation", slug: "nation" },
        { name: "Health", slug: "health" },
        { name: "Money", slug: "money" },
        { name: "Travel", slug: "travel" },
        { name: "Lifestyle", slug: "life" },
        { name: "Home & Garden", slug: "home-garden" }
    ];

    const notifications = [
        { id: "medicare-updates-2026", title: "Breaking: Medicare Part B Premiums Updated", time: "2h ago", type: "Health" },
        { id: "national-parks-senior-pass", title: "New Travel Discount for Seniors at National Parks", time: "5h ago", type: "Travel" },
        { id: "social-security-cola-2026", title: "Social Security COLA 2026 Projections Released", time: "1d ago", type: "Finance" }
    ];

    return (
        <header className="border-b-4 border-primary bg-white sticky top-0 z-50">
            {/* Top Support Bar */}
            <div className="bg-primary text-white py-1">
                <div className="news-container flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs font-bold uppercase tracking-wider gap-2">
                    <span>Wednesday, February 4, 2026</span>
                    <div className="flex gap-4">
                        <Link href="/contact" className="hover:underline">Support Quality Journalism</Link>
                        <Link href="/contact" className="hover:underline">Subscribe: $1 for 6 months</Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="news-container py-6 flex justify-between items-center relative">
                <div className="flex items-center gap-3 sm:gap-6">
                    <button onClick={() => setIsMenuOpen(true)} className="hover:text-primary transition-colors">
                        <Menu className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer" />
                    </button>
                    <button onClick={toggleSearch} className="hover:text-primary transition-colors">
                        <Search className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer" />
                    </button>
                </div>

                <Link href="/" className="text-2xl sm:text-3xl md:text-5xl font-serif font-black tracking-tighter text-black uppercase text-center px-4">
                    Daily <span className="text-primary">News</span> Feed
                </Link>

                <div className="flex items-center gap-3 sm:gap-6 relative">
                    <div className="relative">
                        <button
                            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                            className="hover:text-primary transition-colors relative"
                        >
                            <Bell className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer" />
                            <span className="absolute -top-1 right-0 sm:right-3 h-2 w-2 sm:h-3 sm:w-3 bg-secondary rounded-full border-2 border-white"></span>
                        </button>

                        {/* Notifications Dropdown */}
                        {isNotificationsOpen && (
                            <>
                                <div
                                    className="fixed inset-0 z-10"
                                    onClick={() => setIsNotificationsOpen(false)}
                                />
                                <div className="absolute right-0 mt-4 w-72 sm:w-80 bg-white border border-border shadow-xl z-20 rounded-sm animate-in fade-in zoom-in duration-200 origin-top-right">
                                    <div className="p-4 border-b border-border flex justify-between items-center">
                                        <h3 className="font-black text-xs uppercase tracking-widest">Recent Alerts</h3>
                                        <span className="text-[10px] font-bold text-primary cursor-pointer hover:underline">Mark all read</span>
                                    </div>
                                    <div className="max-h-96 overflow-y-auto">
                                        {notifications.map(n => (
                                            <Link
                                                key={n.id}
                                                href={`/news/${n.id}`}
                                                className="p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors block"
                                                onClick={() => setIsNotificationsOpen(false)}
                                            >
                                                <span className="text-[10px] font-black text-secondary uppercase tracking-widest block mb-1">{n.type}</span>
                                                <p className="text-sm font-bold font-serif leading-tight mb-1">{n.title}</p>
                                                <span className="text-[10px] text-muted font-semibold">{n.time}</span>
                                            </Link>
                                        ))}
                                    </div>
                                    <Link
                                        href="/contact"
                                        className="block p-3 text-center text-[10px] font-black uppercase text-primary hover:bg-accent transition-colors"
                                        onClick={() => setIsNotificationsOpen(false)}
                                    >
                                        View All Notifications
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                    <Link href="/login" className="flex items-center gap-2 cursor-pointer group">
                        <User className="h-5 w-5 sm:h-6 sm:w-6 group-hover:text-primary" />
                        <span className="font-bold text-sm uppercase hidden lg:block group-hover:text-primary">Sign In</span>
                    </Link>
                </div>

                {/* Search Bar Overlay */}
                {isSearchOpen && (
                    <div className="absolute inset-0 bg-white z-20 flex items-center px-4 animate-in slide-in-from-top duration-300">
                        <div className="flex-grow w-full flex items-center gap-2 sm:gap-4">
                            <Search className="h-5 w-5 sm:h-6 sm:w-6 text-muted" />
                            <input
                                autoFocus
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleSearch}
                                placeholder="Search the news..."
                                className="flex-grow bg-transparent border-none focus:ring-0 text-lg sm:text-xl font-serif italic py-2 sm:py-4 min-w-0"
                            />
                            <button onClick={() => setIsSearchOpen(false)}>
                                <X className="h-5 w-5 sm:h-6 sm:w-6 text-muted hover:text-secondary" />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Main Navigation */}
            <nav className="border-t border-border">
                <div className="news-container overflow-x-auto">
                    <ul className="flex justify-center gap-8 py-3 whitespace-nowrap">
                        <li><Link href="/" className="nav-link">Home</Link></li>
                        {categories.map((cat) => (
                            <li key={cat.slug}>
                                <Link href={`/category/${cat.slug}`} className="nav-link">{cat.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Sidebar Menu (Drawer) */}
            {isMenuOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
                        onClick={() => setIsMenuOpen(false)}
                    />
                    <div className="fixed top-0 left-0 h-full w-full max-w-[300px] bg-white z-[70] shadow-2xl p-8 animate-in slide-in-from-left duration-300">
                        <div className="flex justify-between items-center mb-12">
                            <h2 className="text-2xl font-serif font-black uppercase tracking-tighter">DN Feed</h2>
                            <button onClick={() => setIsMenuOpen(false)}>
                                <X className="h-6 w-6 hover:text-secondary" />
                            </button>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xs font-black uppercase text-muted mb-4 tracking-widest border-b border-border pb-1">Sections</h3>
                                <ul className="space-y-4">
                                    {categories.map(cat => (
                                        <li key={cat.slug}>
                                            <Link
                                                href={`/category/${cat.slug}`}
                                                className="text-lg font-bold hover:text-primary transition-colors flex items-center justify-between group"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {cat.name}
                                                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xs font-black uppercase text-muted mb-4 tracking-widest border-b border-border pb-1">Resources</h3>
                                <ul className="space-y-4 font-bold text-sm uppercase">
                                    <li><Link href="/about" className="hover:text-primary" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
                                    <li><Link href="/contact" className="hover:text-primary" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
                                    <li><Link href="/privacy" className="hover:text-primary" onClick={() => setIsMenuOpen(false)}>Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}
