import { createContext, useContext } from "react"
import { useAppReducer } from "./reducers"

const globalContext = createContext()
const { Provider } = globalContext

const GlobalProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useAppReducer({
        user: {
            ci: "",
            ruc: "",
            city: "",
            address: "",
            phone: "",
            zipcode: ""
        },
        cart: [],
        cartId: 0,
        cartItems: 0,
    })

    return <Provider value={[state, dispatch]} {...props} />
}

const useGlobalContext = () => {
    return useContext(globalContext)
}

export { GlobalProvider, useGlobalContext }