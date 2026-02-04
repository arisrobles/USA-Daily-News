export default function AdPlaceholder({
    width = "100%",
    height = 250,
    label = "Advertisement",
    className = ""
}: {
    width?: string | number;
    height?: string | number;
    label?: string;
    className?: string;
}) {
    return (
        <div
            className={`bg-gray-100 border border-gray-200 flex flex-col items-center justify-center text-gray-400 overflow-hidden rounded-sm ${className}`}
            style={{ width, height }}
        >
            <span className="text-[10px] uppercase font-bold tracking-widest mb-2">{label}</span>
            <div className="w-8 h-8 opacity-20 border-2 border-current rounded-full flex items-center justify-center">
                <span className="text-xs italic underline">Ad</span>
            </div>
        </div>
    );
}
