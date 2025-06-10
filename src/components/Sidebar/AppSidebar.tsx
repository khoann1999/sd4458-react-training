import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthenticatedContext } from "../../shared/Authenticated";

interface MenuItem {
    name: string;
    link: string;
    icon: string;
    roles: string[];
}

const AppSidebar = () => {
    const { logout, user } = useContext(AuthenticatedContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/auth/login");
    };

    const menuItems: MenuItem[] = [
        {
            name: 'Preview',
            link: "home",
            icon: '/icons/settings.svg',
            roles: ['admin', 'user']
        },
        {
            name: 'Review',
            link: "review",
            icon: '/icons/settings.svg',
            roles: ['admin']
        },
        {
            name: 'Profile',
            link: `users/${user?.id}/details`,
            icon: '/icons/settings.svg',
            roles: ['admin', 'user']
        }
    ];

    const filteredMenuItems = menuItems.filter(item => item.roles.includes(user?.role || ''));

    return (
        <aside
            id="sidebar"
            className="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width"
            aria-label="Sidebar"
        >
            <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
                    <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                        <ul className="pb-2 space-y-2">
                            {filteredMenuItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.link}
                                        className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
                                    >
                                        <img className="h-8 mr-3" src={item.icon} alt={item.name} />
                                        <span className="ml-3" sidebar-toggle-item="">{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex items-center p-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                        onClick={handleLogout}
                        className="flex items-center w-full p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
                    >
                        <span className="ml-3">Logout</span>
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default AppSidebar;