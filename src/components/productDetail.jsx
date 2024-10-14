import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { useGlobalContext } from "../utils/globalState"

import { ADD_TO_CART } from "../utils/actions"

import { getProductByID } from "../utils/helper"

import Tags from "./tags"
import CartIcon from "./cartIcon"

const ProductDetail = () => {

    const [state, dispatch] = useGlobalContext()

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    const addToCart = (product) => {
        dispatch({
            type: ADD_TO_CART,
            payload: {
                amount: 1,
                productId: product.id,
                title: product.title,
                description: product.description,
                price: product.price,
                image: product.image
            }
        })
    }

    useEffect(() => {
        const productByID = getProductByID(Number(id))
        setProduct(productByID)
        setLoading(false)
    }, [])

    if (loading) {
        return (
            <div>
                Cargando producto...
            </div>
        )
    }

    if (!product) {
        return (
            <div>
                Nada para mostrar...
            </div>
        )
    }

    return (
        <section className="p-6 relative">
            <CartIcon />
            <div className="flex flex-col md:flex-row justify-center items-center mx-auto gap-3 max-w-4xl shadow-xl rounded">
                <img src={product.image} className="w-96 h-96 object-contain" />
                <div className="p-3">
                    <Tags tags={product.tags} />
                    <h2 className="font-semibold mb-2">{product.title}</h2>
                    <p className="text-gray-700 mb-2">{product.description}</p>
                    <p className="mb-2">Rating: {product.rating}</p>
                    <p className="mb-6">Price: ${product.price}</p>
                    <button
                        className="px-3 w-full py-2 font-semibold border-2 border-orange-400 rounded-full text-gray-600 hover:bg-orange-400 hover:text-white"
                        onClick={() => addToCart(product)}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ProductDetail