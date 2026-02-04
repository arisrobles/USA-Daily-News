export default function AboutPage() {
    return (
        <div className="news-container py-20 max-w-3xl">
            <h1 className="text-5xl font-serif font-black mb-8 border-b-4 border-primary inline-block uppercase tracking-tighter">About Us</h1>
            <div className="prose prose-lg font-serif text-gray-800 leading-relaxed">
                <p className="text-xl italic mb-8 border-l-4 border-secondary pl-6">
                    "Journalism is the first rough draft of history."
                </p>
                <p className="mb-6 font-bold text-lg">
                    Daily News Feed was founded in 1984 with a singular mission: to provide the American public with clear, factual, and independent reporting on the issues that matter most.
                </p>
                <p className="mb-6">
                    In an era of rapid-fire information and polarized media, we stand as a beacon of traditional journalistic values. We believe that an informed citizenry is the bedrock of democracy, and we take our responsibility to our readers with the utmost seriousness.
                </p>
                <h2 className="text-3xl font-black mb-4 mt-12 uppercase tracking-tighter text-primary">Our Editorial Standards</h2>
                <p className="mb-6">
                    Every story published by Daily News Feed undergoes a rigorous verification process. We rely on multiple primary sources, deep investigative research, and a commitment to impartiality. Our editors are veterans of the industry who prioritize accuracy above speed.
                </p>
                <h2 className="text-3xl font-black mb-4 mt-12 uppercase tracking-tighter text-primary">Independence</h2>
                <p className="mb-6">
                    We are an independently owned newsroom. This independence allows us to pursue stories without fear or favor, ensuring that our journalism remains focused exclusively on serving our readers' interests.
                </p>
            </div>
        </div>
    );
}
