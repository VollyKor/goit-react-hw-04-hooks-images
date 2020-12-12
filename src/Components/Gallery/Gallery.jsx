// import s from './Gallery.module.css';
import { Component } from 'react';
import request from '../../service/request';
import Idle from '../Idle/Idle';
import Pending from '../Pending/Pending';
import Resolved from '../Resolved/Resolved';
import Rejected from '../Rejected/Rejected';
// idle , pending, resolved, rejected

export default class Gallery extends Component {
  state = {
    data: [],
    message: '',
    // page: 1
  };

  componentDidUpdate() {
    if (this.props.status === 'pending') {
      const { query, setStatus } = this.props;

      request.reset();
      request.getImgs(query).then(res => {
        if (res.status === 200) {
          setStatus('resolved');

          this.setState({
            data: [...res.data.hits],
          });

          return;
        }
        setStatus('rejected');
      });
    }
  }

  addData = newData => {
    this.setState(prevState => {
      return { data: [...prevState.data, ...newData] };
    });
  };

  getData = () => this.state.data;

  render() {
    const { message } = this.state;
    const { status, query } = this.props;

    if (status === 'idle') {
      return <Idle />;
    }
    if (status === 'pending') {
      return <Pending />;
    }
    if (status === 'resolved') {
      return (
        <Resolved getData={this.getData} addData={this.addData} query={query} />
      );
    }
    if (status === 'rejected') {
      return <Rejected message={message} />;
    }
  }
}
