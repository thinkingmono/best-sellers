import Book from "./Book"
import EventExamples from "./EventExamples"

const BookList = () => {

    const books = [
        {
            id: 1,
            url: 'https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL600_SR600,400_.jpg',
            title: 'Iron Flame',
            author: 'Rebecca Yarros'
        },
        {
            id: 2,
            url: 'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg',
            title: 'Atomic Habits',
            author: 'James Clear'
        },
        {
            id: 3,
            url: 'https://images-na.ssl-images-amazon.com/images/I/81hHy5XrdKL._AC_UL600_SR600,400_.jpg',
            title: 'El Cuatro Acuerdos',
            author: 'Don Miguel Ruiz'
        },
        {
            id: 4,
            url: '../images/fourth-wing-images.jpg', //Image upload from public directory.
            title: 'Fourth Wing',
            author: 'Rebecca Yarros'
        },
    ]

    const getBook = (id) => {
        const bookFinded = books.find((book) => book.id === id);
        console.log(bookFinded);
    }

    return (
        <>
            <section className="booklist">
                <h1>Amazon Best Sellers</h1>
                {/* <EventExamples /> */}
                {books.map((book, index) => {
                    return <Book {...book} key={(book.title + book.author).toLowerCase()} getBook={getBook} index={index}/>
                    // return <Book key={(book.title+book.author).toLowerCase()} url={book.url} title={book.title} author={book.author} />
                })}
            </section>
        </>
    )
}

export default BookList;