export default function AdChoicesPage() {
    return (
        <div className="news-container py-20 max-w-3xl">
            <h1 className="text-4xl font-serif font-black mb-8 border-b-4 border-primary inline-block uppercase tracking-tighter">Ad Choices</h1>
            <div className="prose prose-sm md:prose-base font-serif text-gray-800 leading-relaxed">
                <p className="mb-6 font-bold">Last Updated: February 4, 2026</p>
                <p className="mb-6">Daily News Feed is committed to providing you with clear information about the advertisements you see on our platform. We work with various advertising partners to deliver content that is relevant to you.</p>

                <h2 className="text-2xl font-black mb-4 mt-8 uppercase tracking-tighter text-primary">Interest-Based Advertising</h2>
                <p className="mb-6">We and our partners may use cookies and similar technologies to collect information about your browsing habits across different websites to show you ads that are tailored to your interests.</p>

                <h2 className="text-2xl font-black mb-4 mt-8 uppercase tracking-tighter text-primary">Your Choices</h2>
                <p className="mb-6">You can opt-out of receiving interest-based advertisements from many providers by visiting their opt-out pages or using your browser settings to manage tracking. Note that opting out does not mean you will stop seeing ads; it only means the ads will be less relevant to you.</p>

                <h2 className="text-2xl font-black mb-4 mt-8 uppercase tracking-tighter text-primary">Third-Party Partners</h2>
                <p className="mb-6">Our advertising partners include major networks and local providers. For more information on how they manage data, please refer to their respective privacy policies.</p>
            </div>
        </div>
    );
}
