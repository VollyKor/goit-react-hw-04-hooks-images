import { useState } from 'react';
import s from './Resolved.module.css';
import request from '../../../../service/request';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import windowScroll from '../../../../service/windowScroll';
import Modal from '../../../Modal/Modal';
import ListItem from './ListItem/ListItem';
import ModalImg from '../../../Modal/ModalImg/ModalImg';

export default function Resolved({ query, addData, data }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState({});

  const handleClick = () => {
    setIsLoading(true);

    request
      .getNextPageImgs(query)
      .then(({ data: { hits } }) => {
        addData(hits);
        windowScroll();
      })
      .catch(er => console.log(er))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const findModalImg = idToFind => {
    const imgObj = data.find(({ id }) => id === idToFind);
    setModalImg(imgObj);
  };

  const handleImgCLick = idToFind => {
    findModalImg(idToFind);
    setShowModal(true);
  };

  if (data.length === 0) {
    return <div>There's nothing here! Try another query</div>;
  }

  if (data.length > 0) {
    return (
      <div className="wrapper">
        <ul className={s.list}>
          {data.map(el => {
            const { webformatURL, id, tags } = el;
            return (
              <ListItem
                key={id}
                webformatURL={webformatURL}
                id={id}
                tags={tags}
                onClick={handleImgCLick}
              />
            );
          })}
        </ul>

        <LoadMoreBtn isLoading={isLoading} handleClick={handleClick} />

        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <p className={s.loader}>Загрузка...</p>
            <ModalImg imgObj={modalImg} hideModal={() => setShowModal(false)} />
          </Modal>
        )}
      </div>
    );
  }
}
