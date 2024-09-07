const Tags = ({ tags }) => {
    return (
        <>
            {tags.map((tag, index) => (
                <span key={index} className="mr-2 text-blue-500">
                    #{tag}
                </span>
            ))}
        </>
    )
}

export default Tags