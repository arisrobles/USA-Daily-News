import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-accent border-t-8 border-primary py-16 mt-20">
            <div className="news-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif font-black tracking-tighter text-black uppercase">
                            Daily <span className="text-primary">News</span> Feed
                        </h2>
                        <p className="text-sm text-muted leading-relaxed">
                            Delivering independent, high-quality journalism across the United States. Our mission is to inform, engage, and empower our readers with the news that matters most.
                        </p>
                        <div className="flex gap-4">
                            <Facebook className="h-5 w-5 text-primary cursor-pointer hover:opacity-80" />
                            <Twitter className="h-5 w-5 text-primary cursor-pointer hover:opacity-80" />
                            <Instagram className="h-5 w-5 text-primary cursor-pointer hover:opacity-80" />
                            <Youtube className="h-5 w-5 text-primary cursor-pointer hover:opacity-80" />
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-sm uppercase tracking-widest mb-6 text-primary">News Sections</h3>
                        <ul className="space-y-3 text-sm font-semibold">
                            <li><Link href="/category/nation" className="hover:underline">Nation</Link></li>
                            <li><Link href="/category/health" className="hover:underline">Health & Wellness</Link></li>
                            <li><Link href="/category/money" className="hover:underline">Money & Finance</Link></li>
                            <li><Link href="/category/travel" className="hover:underline">Travel & Leisure</Link></li>
                            <li><Link href="/category/life" className="hover:underline">Lifestyle</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-sm uppercase tracking-widest mb-6 text-primary">Customer Service</h3>
                        <ul className="space-y-3 text-sm font-semibold">
                            <li><Link href="/contact" className="hover:underline">Help Center</Link></li>
                            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
                            <li><Link href="/contact" className="hover:underline">Subscription Options</Link></li>
                            <li><Link href="/contact" className="hover:underline">E-Edition</Link></li>
                            <li><Link href="/contact" className="hover:underline">Rewards Program</Link></li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 border border-border rounded-sm">
                        <h3 className="font-bold text-sm uppercase tracking-widest mb-4">Newsletter</h3>
                        <p className="text-xs text-muted mb-4">The day's top headlines delivered to your inbox every morning.</p>
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full px-3 py-2 border border-border text-sm mb-3 focus:outline-primary"
                        />
                        <button className="w-full bg-primary text-white py-2 text-sm font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all">
                            Sign Up
                        </button>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-muted gap-4">
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
                        <Link href="/privacy" className="hover:underline">Terms of Service</Link>
                        <Link href="/privacy" className="hover:underline">Ad Choices</Link>
                        <Link href="/privacy" className="hover:underline">Cookie Policy</Link>
                        <Link href="/privacy" className="hover:underline">Accessibility</Link>
                    </div>
                    <span>&copy; {currentYear} Daily News Feed. All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
}
