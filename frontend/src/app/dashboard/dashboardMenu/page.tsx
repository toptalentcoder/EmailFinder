

export default function DashboardMenu({ collapsed, setCollapsed }: SidebarCollapseProps) {
    return (
        <div className="flex">
            <div className="flex-1 p-8 bg-white">
                <h1 className="text-black">Dashboard Menu</h1>
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => setCollapsed(!collapsed)} 
                >
                    Click Me
                </button>
                <p>This is the dashboard menu page.</p>
            </div>
        </div>
    );
}