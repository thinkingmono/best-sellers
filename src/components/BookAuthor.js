const BookAuthor = (props) => {
    const inlineHeadingStyles = {
        color: '#617d98',
        fontSize: '0.75rem',
        marginTop: '0.5rem',
        letterSpacing: '2px'
    }

    return (
        <>
            <h4 style={inlineHeadingStyles}>{props.author.toUpperCase()}</h4> {/*Inline Style Elements*/}
        </>
    )
}

export default BookAuthor