import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import Book from './Book';
import books from './books';

const BookList = () => {
    const bookL = books.map((book, index)=> {
        return (
            <Book 
            key = {book.title}
            author = {book.author} 
            title = {book.title}
            img = {book.img}
            index = {index}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Morbi in condimentum leo. Nullam quis nibh vehicula ante dapibus 
            elementum sit amet eget nulla. Integer gravida bibendum lorem, 
            et sagittis risus molestie non. Orci varius natoque penatibus 
            et magnis dis parturient montes, nascetur ridiculus mus. 
            </p>
            </Book>
        )
    })
    return (
        <section className='booklist'>
            <EventExamples />
            {bookL}
        </section>
    )
}










const EventExamples = () => {
    // const handleButtonClick =() => {
    //     alert('Handle button click')
    // }

    const handleFormSubmission =(e) => {
        e.preventDefault();
        console.log('Handle form input')
    }

    return (
        <form onSubmit={handleFormSubmission}>
            <h2>Typical Form</h2>
            <input
            type='text'
            name='example'
            style={{margin: '1rem 0'}}
            />
            <button type='submit'>Click me!</button>
        </form>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)