import { Link } from "react-router-dom"

import { useGlobalContext } from "../../utils/globalState"

import CartItem from "../../components/cartItem"
import PaymentForm from "../../components/paymentForm"

const Cart = () => {

    const [state, dispatch] = useGlobalContext()

    const totalPrice = state.cart.reduce((acc, item) => acc + item.amount * item.price, 0);

    const removeAllCartItems = () => {
        dispatch({
            type: "REMOVE_ALL_CART_ITEMS"
        })
    }

    return (
        <section className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded mb-6">
                <h2 className="mb-2 text-2xl font-semibold">Shopping Cart</h2>
                {state.cart.length > 0 && (
                    <button
                        className="mb-2 text-blue-500"
                        onClick={removeAllCartItems}
                    >
                        Remove all
                    </button>
                )}
                <hr />
                {state.cart.length ? (
                    <>
                        {state.cart.map(({ id, title, amount, price, image }) => (
                            <CartItem
                                id={id}
                                key={id}
                                title={title}
                                amount={amount}
                                price={price}
                                image={image}
                            />
                        ))
                        }

                        <p className="font-semibold my-3">Subtotal ({state.cartItems}): ${totalPrice.toFixed(2)}</p>
                    </>
                ) : (
                    <div className="mt-3">
                        <p className="mb-3">Your cart is empty</p>
                        <Link to="/">
                            <p className="text-blue-500">
                                Go to home page
                            </p>
                        </Link>
                    </div>
                )}
            </div>
            {state.cart.length > 0 && (
                <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded">
                    <PaymentForm />
                </div>
            )}
        </section >
    )
}

export default Cart

