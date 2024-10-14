import { useEffect, useState } from "react"

import { getCategories } from "../utils/helper"

const productFilter = ({ filterProducts }) => {

    const [categories, setCategories] = useState([])
    const [isFilter, setIsFilter] = useState(false)

    const toggleFilterMenu = () => {
        setIsFilter(!isFilter)
    }

    useEffect(() => {
        const allCategories = getCategories()
        setCategories(allCategories)
    }, [])

    return (
        <>
            <button
                className="border-2 border-blue-900 px-3 py-2 rounded text-gray-600 font-semibold hover:bg-blue-900 hover:text-white"
                onClick={toggleFilterMenu}
            >
                Filter Products
            </button>
            {isFilter && (
                <ul className="flex flex-row flex-wrap md:flex-nowrap gap-3 mb-6 mt-2 text-center max-w-72">
                    {categories.map((category, index) => (
                        <li
                            key={index}
                            className="bg-blue-500 text-white px-2 py-1 rounded cursor-pointer"
                            onClick={() => filterProducts(category)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default productFilter