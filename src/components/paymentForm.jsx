import { useNavigate } from "react-router-dom"

import { REMOVE_ALL_CART_ITEMS, UPDATE_USER } from "../utils/actions"

import { useGlobalContext } from "../utils/globalState"

const PaymentForm = () => {

    const [state, dispatch] = useGlobalContext()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target

        dispatch({
            type: UPDATE_USER,
            payload: {
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch({
            type: REMOVE_ALL_CART_ITEMS
        })

        navigate("/successfulpayment")
    }

    return (
        <section className="w-full">
            <h3 className="text-2xl font-bold">Complete your order</h3>
            <form
                className="rounded mt-4 p-4 md:p-8 w-full bg-gray-100"
                onSubmit={handleSubmit}
            >
                <h4 className="mb-2 text-lg font-bold">
                    Delivery address
                </h4>
                <p className="mb-5">
                    Enter the address where you want to receive your order
                </p>
                <div className="flex items-center flex-col lg:flex-row gap-3 mb-5">
                    <input
                        required
                        type="text"
                        name="ci"
                        placeholder="C.I"
                        className="p-3 w-full rounded focus:outline-none focus:ring focus:ring-orange-dark focus:ring-1"
                        value={state.user.ci}
                        onChange={handleChange}
                    />
                    <input
                        name="ruc"
                        type="text"
                        placeholder="RUC"
                        className="p-3 w-full rounded focus:outline-none focus:ring focus:ring-orange-dark focus:ring-1"
                        value={state.user.ruc}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex items-center flex-col lg:flex-row gap-3 mb-5">
                    <input
                        required
                        type="text"
                        name="city"
                        placeholder="City"
                        className="p-3 w-full rounded focus:outline-none focus:ring focus:ring-orange-dark focus:ring-1"
                        value={state.user.city}
                        onChange={handleChange}
                    />
                    <input
                        required
                        type="text"
                        name="zipcode"
                        placeholder="Zip code"
                        className="p-3 w-full rounded focus:outline-none focus:ring focus:ring-orange-dark focus:ring-1"
                        value={state.user.zipcode}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex items-center flex-col lg:flex-row gap-3">
                    <input
                        required
                        type="text"
                        name="address"
                        placeholder="Address"
                        className="p-3 w-full rounded focus:outline-none focus:ring focus:ring-orange-dark focus:ring-1"
                        value={state.user.address}
                        onChange={handleChange}
                    />
                    <input
                        required
                        type="text"
                        name="phone"
                        placeholder="Phone number"
                        className="p-3 w-full rounded focus:outline-none focus:ring focus:ring-orange-dark focus:ring-1"
                        value={state.user.phone}
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="text-gray-600 font-semibold mt-4 w-full px-3 py-3 border-2 border-orange-400 rounded-full hover:bg-orange-400 hover:text-white"
                >
                    Proceed to pay
                </button>
            </form>
        </section>
    )
}

export default PaymentForm