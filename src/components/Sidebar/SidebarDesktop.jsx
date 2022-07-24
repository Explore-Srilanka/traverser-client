function SidebarDesktop(){
    return(
        <aside>
        <h2 className="sr-only">Filters</h2>
        <button type="button" className="inline-flex items-center lg:hidden">
            <span className="text-sm font-medium text-gray-700">Filters</span>
            <svg
            className="flex-shrink-0 ml-1 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            >
            <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
            />
            </svg>
        </button>
        <div className="hidden lg:block">
            <form className="divide-y divide-gray-200 space-y-10">
            <div>
                <fieldset>
                <legend className="block text-sm font-medium text-gray-900">
                    Color
                </legend>
                <div className="pt-6 space-y-3">
                    <div className="flex items-center">
                    <input
                        id="color-0"
                        name="color[]"
                        defaultValue="white"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                        htmlFor="color-0"
                        className="ml-3 text-sm text-gray-600"
                    >
                        White
                    </label>
                    </div>
                    <div className="flex items-center">
                    <input
                        id="color-1"
                        name="color[]"
                        defaultValue="beige"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                        htmlFor="color-1"
                        className="ml-3 text-sm text-gray-600"
                    >
                        Beige
                    </label>
                    </div>
                    <div className="flex items-center">
                    <input
                        id="color-2"
                        name="color[]"
                        defaultValue="blue"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                        htmlFor="color-2"
                        className="ml-3 text-sm text-gray-600"
                    >
                        Blue
                    </label>
                    </div>
                    <div className="flex items-center">
                    <input
                        id="color-3"
                        name="color[]"
                        defaultValue="brown"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                        htmlFor="color-3"
                        className="ml-3 text-sm text-gray-600"
                    >
                        Brown
                    </label>
                    </div>
                    <div className="flex items-center">
                    <input
                        id="color-4"
                        name="color[]"
                        defaultValue="green"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                        htmlFor="color-4"
                        className="ml-3 text-sm text-gray-600"
                    >
                        Green
                    </label>
                    </div>
                    <div className="flex items-center">
                    <input
                        id="color-5"
                        name="color[]"
                        defaultValue="purple"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                        htmlFor="color-5"
                        className="ml-3 text-sm text-gray-600"
                    >
                        Purple
                    </label>
                    </div>
                </div>
                </fieldset>
            </div>
            <div className="pt-10">
                <fieldset>
                <legend className="block text-sm font-medium text-gray-900">
                    Category
                </legend>
                <div className="pt-6 space-y-3">
                    <div className="flex items-center">
                    <input
                        id="category-0"
                        name="category[]"
                        defaultValue="new-arrivals"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                        htmlFor="category-0"
                        className="ml-3 text-sm text-gray-600"
                    >
                        All New Arrivals
                    </label>
                    </div>
                    <div className="flex items-center">
                    <input
                        id="category-1"
                        name="category[]"
                        defaultValue="tees"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                        htmlFor="category-1"
                        className="ml-3 text-sm text-gray-600"
                    >
                        Tees
                    </label>
                    </div>
                    <div className="flex items-center">
                    <input
                        id="category-2"
                        name="category[]"
                        defaultValue="crewnecks"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                        htmlFor="category-2"
                        className="ml-3 text-sm text-gray-600"
                    >
                        Crewnecks
                    </label>
                    </div>
                    <div className="flex items-center">
                    <input
                        id="category-3"
                        name="category[]"
                        defaultValue="sweatshirts"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                        htmlFor="category-3"
                        className="ml-3 text-sm text-gray-600"
                    >
                        Sweatshirts
                    </label>
                    </div>
                    <div className="flex items-center">
                    <input
                        id="category-4"
                        name="category[]"
                        defaultValue="pants-shorts"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                        htmlFor="category-4"
                        className="ml-3 text-sm text-gray-600"
                    >
                        Pants &amp; Shorts
                    </label>
                    </div>
                </div>
                </fieldset>
            </div>
            <div className="pt-10">
                <fieldset>
                <legend className="block text-sm font-medium text-gray-900">
                    Sizes
                </legend>
                <div className="pt-6 space-y-3">
                    <div className="flex items-center">
                    <input
                        id="sizes-0"
                        name="sizes[]"
                        defaultValue="xs"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                        htmlFor="sizes-0"
                        className="ml-3 text-sm text-gray-600"
                    >
                        XS
                    </label>
                    </div>
                    <div className="flex items-center">
                    <input
                        id="sizes-1"
                        name="sizes[]"
                        defaultValue="s"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                        htmlFor="sizes-1"
                        className="ml-3 text-sm text-gray-600"
                    >
                        S
                    </label>
                    </div>
                    <div className="flex items-center">
                    <input
                        id="sizes-2"
                        name="sizes[]"
                        defaultValue="m"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                        htmlFor="sizes-2"
                        className="ml-3 text-sm text-gray-600"
                    >
                        M
                    </label>
                    </div>
                    <div className="flex items-center">
                    <input
                        id="sizes-3"
                        name="sizes[]"
                        defaultValue="l"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                        htmlFor="sizes-3"
                        className="ml-3 text-sm text-gray-600"
                    >
                        L
                    </label>
                    </div>
                    <div className="flex items-center">
                    <input
                        id="sizes-4"
                        name="sizes[]"
                        defaultValue="xl"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                        htmlFor="sizes-4"
                        className="ml-3 text-sm text-gray-600"
                    >
                        XL
                    </label>
                    </div>
                    <div className="flex items-center">
                    <input
                        id="sizes-5"
                        name="sizes[]"
                        defaultValue="2xl"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                        htmlFor="sizes-5"
                        className="ml-3 text-sm text-gray-600"
                    >
                        2XL
                    </label>
                    </div>
                </div>
                </fieldset>
            </div>
            </form>
        </div>
        </aside>
    )
}

export default SidebarDesktop;