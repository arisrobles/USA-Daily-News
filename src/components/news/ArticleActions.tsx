"use client";

import { Share2, MessageCircle, Bookmark, Printer, Check } from 'lucide-react';
import { useState } from 'react';

export default function ArticleActions() {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        const url = window.location.href;
        if (navigator.share) {
            try {
                await navigator.share({
                    title: document.title,
                    url: url
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            // Fallback: Copy to clipboard
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handlePrint = () => {
        window.print();
    };

    const handleBookmark = () => {
        setIsBookmarked(!isBookmarked);
    };

    const handleComment = () => {
        // Scroll to subscripton/info box as a placeholder for "engagement"
        const element = document.getElementById('engagement-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex gap-4">
            <button
                onClick={handleShare}
                title="Share this article"
                className="p-3 border border-border rounded-full hover:bg-accent transition-colors relative"
            >
                {copied ? <Check className="h-5 w-5 text-green-600" /> : <Share2 className="h-5 w-5" />}
                {copied && <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded">Copied!</span>}
            </button>
            <button
                onClick={handleComment}
                title="Join conversation"
                className="p-3 border border-border rounded-full hover:bg-accent transition-colors"
            >
                <MessageCircle className="h-5 w-5" />
            </button>
            <button
                onClick={handleBookmark}
                title={isBookmarked ? "Remove bookmark" : "Save for later"}
                className={`p-3 border border-border rounded-full hover:bg-accent transition-colors ${isBookmarked ? 'bg-primary/5 border-primary text-primary' : ''}`}
            >
                <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-primary' : ''}`} />
            </button>
            <button
                onClick={handlePrint}
                title="Print article"
                className="p-3 border border-border rounded-full hover:bg-accent transition-colors"
            >
                <Printer className="h-5 w-5" />
            </button>
        </div>
    );
}
