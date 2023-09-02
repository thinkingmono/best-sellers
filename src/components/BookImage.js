const BookImage = ({url, title}) => { {/*Destructuring props from parameters*/}
  return (
    <>
        <img src={url} alt={title} />
    </>
  )
}

export default BookImage