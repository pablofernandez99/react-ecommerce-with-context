import { useEffect, useState } from "react"

import { getCategories } from "../utils/helper"

const productFilter = ({ filterProducts }) => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const allCategories = getCategories()
        setCategories(allCategories)
    }, [])

    return (
        <ul className="flex flex-col md:flex-row gap-3 justify-center mb-6 text-center max-w-72 mx-auto">
            {categories.map((category, index) => (
                <li
                    key={index}
                    className="bg-blue-500 text-white px-3 py-2 rounded cursor-pointer"
                    onClick={() => filterProducts(category)}
                >
                    {category}
                </li>
            ))}
        </ul>
    )
}

export default productFilter