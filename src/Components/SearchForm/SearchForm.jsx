import { Component } from 'react';
import { BsSearch as Icon } from 'react-icons/bs';
import s from './SearchForm.module.css';

export default class SearchForm extends Component {
  state = {
    searchQuery: '',
    submitQuery: '',
  };

  handleChange(e) {
    this.setState({
      searchQuery: e.target.value,
    });
  }

  handleSubmit = e => {
    const { searchQuery, submitQuery } = this.state;
    const { setQuery, setStatus, status } = this.props;
    e.preventDefault();

    if (status === 'pending') {
      return;
    }

    if (searchQuery !== submitQuery) {
      this.setState({ submitQuery: this.state.searchQuery });
      setQuery(searchQuery);
      setStatus('pending');
    }
  };

  render() {
    return (
      <header className={`container ${s.header}`}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label className={s.label}>
            <button className={s.button} type="submit">
              <Icon aria-label="Search Icom" className={s.icon} />
            </button>
            <input
              type="text"
              className={s.input}
              onChange={e => this.handleChange(e)}
            />
          </label>
        </form>
      </header>
    );
  }
}
