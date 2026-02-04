export default function LoginPage() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center news-container">
            <div className="w-full max-w-md bg-white border border-border p-10 rounded-sm shadow-sm text-center">
                <h1 className="text-4xl font-serif font-black mb-2 uppercase tracking-tighter">Welcome Back</h1>
                <p className="text-muted text-sm mb-8 font-semibold uppercase tracking-widest">Sign in to your digital account</p>

                <form className="space-y-6 text-left">
                    <div>
                        <label className="block text-xs font-black uppercase mb-1 tracking-widest">Email Address</label>
                        <input type="email" placeholder="name@example.com" className="w-full px-4 py-3 border border-border focus:outline-primary font-serif" />
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <label className="block text-xs font-black uppercase tracking-widest">Password</label>
                            <a href="#" className="text-[10px] uppercase font-bold text-primary hover:underline">Forgot?</a>
                        </div>
                        <input type="password" placeholder="••••••••" className="w-full px-4 py-3 border border-border focus:outline-primary font-serif" />
                    </div>
                    <button className="w-full bg-primary text-white py-4 font-bold uppercase tracking-widest text-sm hover:bg-opacity-90 transition-all">
                        Sign In
                    </button>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-100">
                    <p className="text-xs text-muted mb-4 uppercase font-bold">Don't have an account?</p>
                    <button className="w-full border-2 border-primary text-primary py-3 font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all">
                        View Subscription Options
                    </button>
                </div>
            </div>
        </div>
    );
}
