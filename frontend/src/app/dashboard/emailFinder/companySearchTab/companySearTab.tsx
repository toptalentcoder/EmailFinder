export default function CompanySearchTab() {
    return (
        <div className="mt-6 ml-4">
            <h2 className="mb-2 text-sm font-semibold text-gray-800">Domain Search</h2>
            <div className="flex items-center border border-gray-300 rounded overflow-hidden max-w-xl">
                <input
                    type="text"
                    placeholder="Enter a domain or company name"
                    className="w-full px-4 py-2 text-sm border-none outline-none"
                />
                <button className="px-3">
                    <svg
                        className="w-4 h-4 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
