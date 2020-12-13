import { Component } from 'react';
import s from './LoadMoreBtn.module.css';
export default class LoadMoreBtn extends Component {
  render() {
    const { handleClick, isLoading } = this.props;

    if (this.props.isLoading === true) {
    }
    return (
      <button className={s.btn} type="button" onClick={handleClick}>
        {isLoading && '...Loading'}
        {!isLoading && 'Load More'}
      </button>
    );
  }
}
