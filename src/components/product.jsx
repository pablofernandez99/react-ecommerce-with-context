import { Link } from "react-router-dom"

import { useGlobalContext } from "../utils/globalState"

import { ADD_TO_CART } from "../utils/actions"

const Product = ({ id, title, description, image, price, rating }) => {

    const [state, dispatch] = useGlobalContext()

    const addToCart = (id, title, description, price, image) => {
        dispatch({
            type: ADD_TO_CART,
            payload: {
                amount: 1,
                productId: id,
                title: title,
                description: description,
                price: price,
                image: image
            }
        })
    }

    return (
        <div className="max-w-72 shadow bg-white rounded">
            <Link to={`/product/${id}`}>
                <img src={image} alt={title} className="w-96 h-72 object-contain" />
            </Link>
            <div className="p-3">
                <Link to={`/product/${id}`}>
                    <h2 className="overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold">
                        {title}
                    </h2>
                </Link>
                <p className="text-gray-700">Rating: {rating}</p>
                <p className="">Price: ${price}</p>
                <button
                    className="text-gray-800 my-2 w-full px-3 py-2 bg-yellow-500 rounded-full"
                    onClick={() => addToCart(id, title, description, price, image)}
                >
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default Product