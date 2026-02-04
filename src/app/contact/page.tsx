export default function ContactPage() {
    return (
        <div className="news-container py-20 max-w-4xl">
            <h1 className="text-5xl font-serif font-black mb-12 border-b-4 border-primary inline-block uppercase tracking-tighter">Contact Us</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-2xl font-bold uppercase mb-6 text-primary">Newsroom Inquiries</h2>
                    <p className="mb-4 text-muted font-semibold">Have a news tip or a correction?</p>
                    <div className="space-y-4 font-serif italic text-lg pr-8">
                        <p><strong>General Tips:</strong> tips@dailynewsfeed.com</p>
                        <p><strong>Corrections:</strong> corrections@dailynewsfeed.com</p>
                        <p><strong>Press Releases:</strong> press@dailynewsfeed.com</p>
                    </div>

                    <h2 className="text-2xl font-bold uppercase mt-12 mb-6 text-primary">Customer Support</h2>
                    <p className="mb-4 text-muted font-semibold">Need help with your subscription?</p>
                    <div className="space-y-4 font-serif italic text-lg">
                        <p><strong>Support:</strong> support@dailynewsfeed.com</p>
                        <p><strong>Phone:</strong> 1-800-DAILY-NEWS</p>
                        <p><strong>Hours:</strong> Mon-Fri 8am-8pm EST</p>
                    </div>
                </div>

                <div className="bg-accent p-8 border border-border rounded-sm">
                    <h2 className="text-2xl font-bold uppercase mb-6">Send us a Message</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold uppercase mb-1">Full Name</label>
                            <input type="text" className="w-full px-4 py-2 border border-border focus:outline-primary font-serif" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase mb-1">Email Address</label>
                            <input type="email" className="w-full px-4 py-2 border border-border focus:outline-primary font-serif" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase mb-1">Subject</label>
                            <select className="w-full px-4 py-2 border border-border focus:outline-primary font-serif bg-white text-sm">
                                <option>Subscription Help</option>
                                <option>News Tip</option>
                                <option>Advertising Inquiries</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase mb-1">Message</label>
                            <textarea rows={5} className="w-full px-4 py-2 border border-border focus:outline-primary font-serif"></textarea>
                        </div>
                        <button className="w-full bg-primary text-white py-3 font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all">
                            Submit Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
