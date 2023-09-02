import BookImage from "./BookImage";
import BookTitle from "./BookTitle";
import BookAuthor from "./BookAuthor";

const Book = (props) => {
    const {url, title, author, id, index, getBook} = props; {/*Destructuring props to independent variables*/}
    {/*Use a reference function to add it inside a onClick event, this way function doesn't render right away when component render*/}
    const getSingleBook = () => {
        getBook(id);
    }
    return (
        <>
            <article className="book">
                <span className="top-number"># {index+1}</span>
                <BookImage url={url} title={title} />
                <BookTitle title={title} />
                {/* <button onClick={getSingleBook}>Find Book</button> */}
                <button onClick={() => getBook(id)}>Find Book</button> {/*Anonymous function call to pass function getBook*/}
                <BookAuthor author={author} />
            </article>
        </>
    )
}

export default Book;