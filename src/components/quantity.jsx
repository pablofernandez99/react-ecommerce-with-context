const Quantity = ({ amount, changeValue }) => {
    return (
        <>
            <label htmlFor="amount">Amount:</label>
            <select
                name="amount"
                value={amount}
                onChange={changeValue}
                className="cursor-pointer"
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </>
    )
}

export default Quantity