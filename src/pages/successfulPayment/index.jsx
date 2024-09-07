import { Link } from "react-router-dom"

const SuccesfulPayment = () => {
    return (
        <section className="min-h-screen bg-gray-100 p-6">
            <h2 className="text-green-500 font-semibold">SUCCESS PAYMENT</h2>
            <Link to="/">
                <p className="text-blue-500">Go to home page</p>
            </Link>
        </section>
    )
}

export default SuccesfulPayment