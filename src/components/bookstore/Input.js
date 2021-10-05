import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

function Input() {
  const dispatch = useDispatch();
  const [inputBook, setInputBook] = useState({
    title: '',
    author: '',
    category: 'Romance',
  });

  const onChange = (e) => {
    setInputBook((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...inputBook,
      id: uuidv4(),
    };
    dispatch(addBook(payload));
  };
  const { title, author, category } = inputBook;
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input name="title" type="text" placeholder="Book title" value={title} onChange={onChange} />
        <input name="author" type="text" placeholder="Book author" value={author} onChange={onChange} />
        <select name="category" id="categories" value={category} onChange={onChange}>
          <option value="Romance">Romance</option>
          <option value="Mystery">Mystery</option>
          <option value="Fantasy and science fiction">Fantasy and science fiction</option>
          <option value="Thrillers and horror">Thrillers and horror</option>
        </select>
        <button type="button" onClick={handleSubmit}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default Input;
