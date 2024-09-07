import { Link } from "react-router-dom"

import { useGlobalContext } from "../utils/globalState"

const CartIcon = () => {

    const [state, dispatch] = useGlobalContext()

    return (
        <Link to="/cart">
            <div className="fixed bottom-8 right-8 rounded rounded-full p-2 text-white bg-yellow-600">
                {state.cartItems}
            </div>
        </Link>
    )
}

export default CartIcon