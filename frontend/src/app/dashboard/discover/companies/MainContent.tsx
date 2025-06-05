import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { GoPlusCircle } from "react-icons/go";
import { FaLink } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { TiShoppingBag } from "react-icons/ti";


export default function MainContent(){
    return (
        <main className="flex-1 border border-gray-300   ">
            {/* Header */}
            <div className="flex items-center justify-between mt-2 mb-2 ml-4">
                <div className="text-lg font-semibold">23 Companies Found</div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-white border border-gray-300">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-100 text-gray-600 text-xs">
                        <tr>
                            <th className="p-3">
                                <input type="checkbox" />
                            </th>
                            <th className="p-3 text-left">Company</th>
                            <th className="p-3 text-left">Links</th>
                            <th className="p-3 text-left">Number of Employees</th>
                            <th className="p-3 text-left">Location</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Action</th>
                            <th className="p-3 text-left"></th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800">
                        {Array.from({ length: 10 }).map((_, idx) => (
                            <tr key={idx} className="border-b border-gray-300 hover:bg-gray-50">
                                <td className="p-3">
                                    <input type="checkbox" />
                                </td>
                                <td className="p-3">
                                    <div className=" flex items-center gap-2">
                                        <div className="bg-red-400 rounded-lg h-6 w-6"></div>
                                        Starta Leadership
                                    </div>
                                </td>
                                <td className="p-3">
                                    <div className="flex items-center gap-2">
                                        <a href="#" className="text-blue-600 hover:underline">
                                            <TiShoppingBag className="w-4 h-4" />
                                        </a>
                                        <a href="#" className="text-blue-600 hover:underline">
                                            <FaLink className="w-4 h-4" />
                                        </a>
                                        <a href="#" className="text-blue-600 hover:underline">
                                            <FaFacebookF className="w-4 h-4" />
                                        </a>
                                        <a href="#" className="text-blue-600 hover:underline">
                                            <FaXTwitter className="w-4 h-4" />
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    <div className="p-3">
                                        520
                                    </div>
                                </td>
                                <td className="p-3">
                                    <div>
                                        San Francisco
                                    </div>
                                </td>
                                <td className="p-3">
                                    <div>
                                        <button
                                            className={`flex items-center gap-1 px-2 py-1 rounded border text-xs font- cursor-pointer ${
                                            idx % 3 === 0
                                                ? "text-red-600 border-red-600 hover:text-white hover:bg-red-600"
                                                : "text-green-600 border-green-600 hover:text-white hover:bg-green-600"
                                            }`}
                                        >
                                            {idx % 3 === 0 ? (
                                                <MdOutlineMarkEmailUnread className="w-4 h-4" />
                                            ) : (
                                                <MdOutlineMarkEmailRead className="w-4 h-4" />
                                            )}
                                            Access email
                                        </button>
                                    </div>
                                </td>
                                <td className="p-3">
                                    <div>
                                        <button className="text-gray-800 border border-gray-300 px-2 py-0.5 text-sm flex items-center gap-1 rounded-lg hover:bg-gray-200 cursor-pointer">
                                            <GoPlusCircle className="w-4 h-4" />
                                            Save Company
                                        </button>
                                    </div>
                                </td>
                                <td className="p-3 text-gray-400 text-xl">
                                    <div>
                                        ...
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )

}