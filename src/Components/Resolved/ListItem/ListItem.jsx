import s from './ListItem.module.css';
export default function ListItem({ id, webformatURL, tags, onClick }) {
  return (
    <li onClick={() => onClick(id)}>
      <img
        className={s.listImg}
        data-id={id}
        src={webformatURL}
        alt={tags}
        width="180px"
        height="150px"
      />
    </li>
  );
}
