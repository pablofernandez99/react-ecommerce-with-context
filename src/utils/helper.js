import { products, categories } from "../api"

export const getProducts = () => (
    products
)

export const getProductByID = (id) => {
    const product = products.find(product => (
        product.id === id
    ))

    if (!product) {
        return
    }

    return product
}

export const getProductsByTag = (tag) => {
    const filteredProducts = products.filter(product => (
        product.tags.includes(tag)
    ))

    return filteredProducts
}

export const getCategories = () => (
    categories
)
