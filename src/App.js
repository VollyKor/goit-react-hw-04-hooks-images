import 'normalize.css';
import './App.css';
import SearchForm from './Components/SearchForm/SearchForm';
import Gallery from './Components/Gallery/Gallery';
import { Component } from 'react';

class App extends Component {
  state = {
    query: '',
    status: 'idle',
  };

  // componentDidUpdate() {
  //   if (this.state.status === 'pending') {
  //     // this.setStatus('resolved');
  //   }
  // }

  setQuery = query => {
    this.setState({ query });
  };

  currentStatus = () => {
    return this.state.status;
  };

  setStatus = newStatus => {
    this.setState({ status: newStatus });
  };

  render() {
    // console.log('render');
    const { query } = this.state;
    return (
      <>
        <SearchForm
          setQuery={this.setQuery}
          status={this.currentStatus}
          setStatus={this.setStatus}
        />
        <main className="container">
          <Gallery
            status={this.currentStatus()}
            setStatus={this.setStatus}
            query={query}
          />
        </main>
      </>
    );
  }
}

export default App;
