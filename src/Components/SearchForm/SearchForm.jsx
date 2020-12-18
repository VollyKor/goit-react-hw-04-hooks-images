import { useState } from 'react';
import { BsSearch as Icon } from 'react-icons/bs';
import s from './SearchForm.module.css';

export default function SearchForm({ setQuery, setStatus, status }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [submitQuery, setSubmitQuery] = useState('');

  function handleChange({ target: { value } }) {
    setSearchQuery(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (status === 'pending') {
      return;
    }

    if (searchQuery !== submitQuery) {
      setSubmitQuery(searchQuery);
      setQuery(searchQuery);
      setStatus('pending');
    }
  }

  return (
    <header className={`container ${s.header}`}>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          <button className={s.button} type="submit">
            <Icon aria-label="Search Icom" className={s.icon} />
          </button>
          <input
            type="text"
            className={s.input}
            onChange={e => handleChange(e)}
          />
        </label>
      </form>
    </header>
  );
}
