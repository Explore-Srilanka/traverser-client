
function SidebarMobile() {
    return (
        <div
        className="fixed inset-0 flex z-40 lg:hidden"
        role="dialog"
        aria-modal="true"
        >
        <div
            className="fixed inset-0 bg-black bg-opacity-25"
            aria-hidden="true"
        />
        <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-6 flex flex-col overflow-y-auto">
            <div className="px-4 flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">Filters</h2>
            <button
                type="button"
                className="-mr-2 w-10 h-10 p-2 flex items-center justify-center text-gray-400 hover:text-gray-500"
            >
                <span className="sr-only">Close menu</span>
                <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                />
                </svg>
            </button>
            </div>
            <form className="mt-4">
            <div className="border-t border-gray-200 pt-4 pb-4">
                <fieldset>
                <legend className="w-full px-2">
                    <button
                    type="button"
                    className="w-full p-2 flex items-center justify-between text-gray-400 hover:text-gray-500"
                    aria-controls="filter-section-0"
                    aria-expanded="false"
                    >
                    <span className="text-sm font-medium text-gray-900">
                        Color
                    </span>
                    <span className="ml-6 h-7 flex items-center">
                        <svg
                        className="rotate-0 h-5 w-5 transform"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                        </svg>
                    </span>
                    </button>
                </legend>
                <div className="pt-4 pb-2 px-4" id="filter-section-0">
                    <div className="space-y-6">
                    <div className="flex items-center">
                        <input
                        id="color-0-mobile"
                        name="color[]"
                        defaultValue="white"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                        htmlFor="color-0-mobile"
                        className="ml-3 text-sm text-gray-500"
                        >
                        White
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                        id="color-1-mobile"
                        name="color[]"
                        defaultValue="beige"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                        htmlFor="color-1-mobile"
                        className="ml-3 text-sm text-gray-500"
                        >
                        Beige
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                        id="color-2-mobile"
                        name="color[]"
                        defaultValue="blue"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                        htmlFor="color-2-mobile"
                        className="ml-3 text-sm text-gray-500"
                        >
                        Blue
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                        id="color-3-mobile"
                        name="color[]"
                        defaultValue="brown"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                        htmlFor="color-3-mobile"
                        className="ml-3 text-sm text-gray-500"
                        >
                        Brown
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                        id="color-4-mobile"
                        name="color[]"
                        defaultValue="green"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                        htmlFor="color-4-mobile"
                        className="ml-3 text-sm text-gray-500"
                        >
                        Green
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                        id="color-5-mobile"
                        name="color[]"
                        defaultValue="purple"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                        htmlFor="color-5-mobile"
                        className="ml-3 text-sm text-gray-500"
                        >
                        Purple
                        </label>
                    </div>
                    </div>
                </div>
                </fieldset>
            </div>
            <div className="border-t border-gray-200 pt-4 pb-4">
                <fieldset>
                <legend className="w-full px-2">
                    <button
                    type="button"
                    className="w-full p-2 flex items-center justify-between text-gray-400 hover:text-gray-500"
                    aria-controls="filter-section-1"
                    aria-expanded="false"
                    >
                    <span className="text-sm font-medium text-gray-900">
                        Category
                    </span>
                    <span className="ml-6 h-7 flex items-center">
                        <svg
                        className="rotate-0 h-5 w-5 transform"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                        </svg>
                    </span>
                    </button>
                </legend>
                <div className="pt-4 pb-2 px-4" id="filter-section-1">
                    <div className="space-y-6">
                    <div className="flex items-center">
                        <input
                        id="category-0-mobile"
                        name="category[]"
                        defaultValue="new-arrivals"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                        htmlFor="category-0-mobile"
                        className="ml-3 text-sm text-gray-500"
                        >
                        All New Arrivals
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                        id="category-1-mobile"
                        name="category[]"
                        defaultValue="tees"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                        htmlFor="category-1-mobile"
                        className="ml-3 text-sm text-gray-500"
                        >
                        Tees
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                        id="category-2-mobile"
                        name="category[]"
                        defaultValue="crewnecks"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                        htmlFor="category-2-mobile"
                        className="ml-3 text-sm text-gray-500"
                        >
                        Crewnecks
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                        id="category-3-mobile"
                        name="category[]"
                        defaultValue="sweatshirts"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                        htmlFor="category-3-mobile"
                        className="ml-3 text-sm text-gray-500"
                        >
                        Sweatshirts
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                        id="category-4-mobile"
                        name="category[]"
                        defaultValue="pants-shorts"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                        htmlFor="category-4-mobile"
                        className="ml-3 text-sm text-gray-500"
                        >
                        Pants &amp; Shorts
                        </label>
                    </div>
                    </div>
                </div>
                </fieldset>
            </div>
            <div className="border-t border-gray-200 pt-4 pb-4">
                <fieldset>
                <legend className="w-full px-2">
                    <button
                    type="button"
                    className="w-full p-2 flex items-center justify-between text-gray-400 hover:text-gray-500"
                    aria-controls="filter-section-2"
                    aria-expanded="false"
                    >
                    <span className="text-sm font-medium text-gray-900">
                        Sizes
                    </span>
                    <span className="ml-6 h-7 flex items-center">
                        <svg
                        className="rotate-0 h-5 w-5 transform"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                        </svg>
                    </span>
                    </button>
                </legend>
                <div className="pt-4 pb-2 px-4" id="filter-section-2">
                    <div className="space-y-6">
                    <div className="flex items-center">
                        <input
                        id="sizes-0-mobile"
                        name="sizes[]"
                        defaultValue="xs"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                        htmlFor="sizes-0-mobile"
                        className="ml-3 text-sm text-gray-500"
                        >
                        XS
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                        id="sizes-1-mobile"
                        name="sizes[]"
                        defaultValue="s"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                        htmlFor="sizes-1-mobile"
                        className="ml-3 text-sm text-gray-500"
                        >
                        S
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                        id="sizes-2-mobile"
                        name="sizes[]"
                        defaultValue="m"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                        htmlFor="sizes-2-mobile"
                        className="ml-3 text-sm text-gray-500"
                        >
                        M
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                        id="sizes-3-mobile"
                        name="sizes[]"
                        defaultValue="l"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                        htmlFor="sizes-3-mobile"
                        className="ml-3 text-sm text-gray-500"
                        >
                        L
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                        id="sizes-4-mobile"
                        name="sizes[]"
                        defaultValue="xl"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                        htmlFor="sizes-4-mobile"
                        className="ml-3 text-sm text-gray-500"
                        >
                        XL
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                        id="sizes-5-mobile"
                        name="sizes[]"
                        defaultValue="2xl"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                        htmlFor="sizes-5-mobile"
                        className="ml-3 text-sm text-gray-500"
                        >
                        2XL
                        </label>
                    </div>
                    </div>
                </div>
                </fieldset>
            </div>
            </form>
        </div>
        </div>
    )
}

export default SidebarMobile;