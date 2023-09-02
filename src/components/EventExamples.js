const EventExamples = () => {
    const handleFormInput = (e) => {
        console.log('handle form input');
        // console.log(e.target.name);
        console.log(e.target.value);
    }

    const handleButtonClick = (e) => {
        e.preventDefault();
        alert('handle button click');
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('handle form submit');
        console.log('Form submited');
        e.target.reset();
    }

    return (
        <>
            <section>
                <form onSubmit={handleFormSubmit}>
                    <h2>Typical Form</h2>
                    <input onChange={handleFormInput} type="text" name='example' style={{ margin: '1rem 0' }} />
                    <button type="submit">Click Me</button>
                </form>
            </section>
        </>
    )
}

export default EventExamples