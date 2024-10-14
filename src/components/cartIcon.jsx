import { Link } from "react-router-dom"

import { useGlobalContext } from "../utils/globalState"

const CartIcon = () => {

    const [state] = useGlobalContext()

    return (
        <Link to="/cart">
            <div className="fixed top-6 right-6 z-50">
                {/* Icono de carrito */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-9 h-9 text-gray-800 transition-transform transform hover:scale-105 duration-300 ease-in-out"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2m0 0h13.24l1.1 5.5H6.42L5.4 5H3.4m1 0l.4 2m0 0L4.8 12.5M6.42 12.5H19.56l1.68 8.5H7.32L6.42 12.5z"
                    />
                </svg>

                {/* Círculo de la cantidad de ítems */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-400 text-white rounded-full flex items-center justify-center text-xs font-semibold shadow-lg">
                    {state.cartItems}
                </div>
            </div>
        </Link>
    )
}

export default CartIcon