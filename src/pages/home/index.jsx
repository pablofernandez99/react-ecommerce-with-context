import { useState, useEffect } from "react"

import { getProducts, getProductsByTag } from "../../utils/helper"

import Product from "../../components/product"
import ProductFilter from "../../components/productFilter"
import CartIcon from "../../components/cartIcon"

const Home = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const filterProducts = (tag) => {
        const t = tag.toLowerCase()
        const productsByTag = getProductsByTag(t)
        setProducts(productsByTag)
    }

    useEffect(() => {
        const allProducts = getProducts()
        setProducts(allProducts)
        setLoading(false)
    }, [])

    if (loading) {
        return (
            <div>
                Cargando productos...
            </div>
        )
    }

    if (!products.length) {
        return (
            <div>
                Nada para mostrar!
            </div>
        )
    }

    return (
        <section className="p-6 min-h-screen bg-gray-100 border relative">
            <CartIcon />
            <ProductFilter filterProducts={filterProducts} />
            <div className="flex flex-wrap gap-6 justify-center mt-6">
                {products.map(({ id, title, description, image, price, rating }) => (
                    <div key={id}>
                        <Product
                            id={id}
                            title={title}
                            description={description}
                            image={image}
                            price={price}
                            rating={rating}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Home