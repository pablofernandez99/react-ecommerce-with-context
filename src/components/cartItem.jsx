import { CHANGE_CART_ITEM_VALUE, REMOVE_ONE_CART_ITEM } from "../utils/actions"

import { useGlobalContext } from "../utils/globalState"

import Quantity from "./quantity"

const CartItem = ({ id, title, amount, price, image }) => {

    const [state, dispatch] = useGlobalContext()

    const removeOneCartItem = (id, amount) => {
        dispatch({
            type: REMOVE_ONE_CART_ITEM,
            payload: {
                id,
                amount
            }
        })
    }

    const changeCartItemValue = (e, id, oldAmount) => {

        const newAmount = e.target.value

        dispatch({
            type: CHANGE_CART_ITEM_VALUE,
            payload: {
                id,
                oldAmount,
                amount: newAmount
            }
        })
    }

    return (
        <>
            <div className="my-6 flex">
                <figure className="max-w-36">
                    <img src={image} alt={title} className="w-full" />
                </figure>
                <div className="w-full flex flex-col justify-between px-6">
                    <div className="flex justify-between flex-col md:flex-row">
                        <h2 className="font-semibold">{title}</h2>
                        <p className="font-semibold">${price}</p>
                    </div>
                    <div className="w-full flex gap-3">
                        <Quantity amount={amount} changeValue={(e) => changeCartItemValue(e, id, amount)} />
                        <button
                            className="text-blue-500 px-3 border-l"
                            onClick={() => removeOneCartItem(id, amount)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default CartItem