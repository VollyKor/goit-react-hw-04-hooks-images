import s from './LoadMoreBtn.module.css';
export default function LoadMoreBtn({ handleClick, isLoading }) {
  if (isLoading === true) {
  }
  return (
    <button className={s.btn} type="button" onClick={handleClick}>
      {isLoading && '...Loading'}
      {!isLoading && 'Load More'}
    </button>
  );
}
