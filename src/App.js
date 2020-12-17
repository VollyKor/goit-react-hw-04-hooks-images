import 'normalize.css';
import './App.css';
import SearchForm from './Components/SearchForm/SearchForm';
import Gallery from './Components/Gallery/Gallery';
import { useState } from 'react';

export default function App() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('idle');

  return (
    <>
      <SearchForm setQuery={setQuery} status={status} setStatus={setStatus} />
      <main className="container">
        <Gallery status={status} setStatus={setStatus} query={query} />
      </main>
    </>
  );
}
