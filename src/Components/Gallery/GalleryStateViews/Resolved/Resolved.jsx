import { Component } from 'react';
import s from './Resolved.module.css';
import request from '../../../../service/request';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import windowScroll from '../../../../service/windowScroll';
import Modal from '../../../Modal/Modal';
import ListItem from './ListItem/ListItem';
import ModalImg from '../../../Modal/ModalImg/ModalImg';

export default class Resolved extends Component {
  state = {
    isLoading: false,
    showModal: false,
    modalImg: {},
  };

  handleClick = () => {
    const { query, addData } = this.props;
    this.setState({ isLoading: true });

    request
      .getNextPageImgs(query)
      .then(({ data: { hits } }) => {
        addData(hits);
        windowScroll();
      })
      .catch(er => console.log(er))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  showModal = () => {
    this.setState({ showModal: true });
  };
  hideModal = () => {
    this.setState({ showModal: false });
  };

  handleImgCLick = idToFind => {
    this.setModalImg(idToFind);
    this.showModal();
  };

  setModalImg = idToFind => {
    const dataArr = this.props.getData();
    const imgObj = dataArr.find(({ id }) => id === idToFind);
    this.setState({ modalImg: imgObj });
  };

  render() {
    const data = this.props.getData();
    const { isLoading, showModal } = this.state;

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
                  onClick={this.handleImgCLick}
                />
              );
            })}
          </ul>
          <LoadMoreBtn isLoading={isLoading} handleClick={this.handleClick} />

          {showModal && (
            <Modal onClose={this.hideModal}>
              <p className={s.loader}>Загрузка...</p>
              <ModalImg
                imgObj={this.state.modalImg}
                hideModal={this.hideModal}
              />
            </Modal>
          )}
        </div>
      );
    }
  }
}
