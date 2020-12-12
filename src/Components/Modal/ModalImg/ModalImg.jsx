import s from './ModalImg.module.css';

export default function ModalImg({
  imgObj: { id, largeImageURL, tags },
  // hideModal,
}) {
  return (
    <img
      className={s.img}
      id={id}
      src={largeImageURL}
      alt={tags}
      // onClick={() => console.log('click')}
    ></img>
  );
}
