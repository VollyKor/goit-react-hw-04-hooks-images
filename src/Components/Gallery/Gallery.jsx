import { useState, useEffect } from 'react';
import request from '../../service/request';
import Idle from './GalleryStateViews/Idle/Idle';
import Pending from './GalleryStateViews/Pending/Pending';
import Resolved from './GalleryStateViews/Resolved/Resolved';
import Rejected from './GalleryStateViews/Rejected/Rejected';
// idle , pending, resolved, rejected

export default function Gallery({ status, query, setStatus }) {
  const [data, setData] = useState([]);
  const [message] = useState('');

  useEffect(() => {
    if (status === 'pending') {
      request.reset();
      request.getImgs(query).then(res => {
        if (res.status === 200) {
          setStatus('resolved');
          setData([...res.data.hits]);
          return;
        }
        setStatus('rejected');
      });
    }
  }, [query, setStatus, status]);

  const addData = newData => {
    setData(prevState => {
      return [...prevState, ...newData];
    });
  };

  if (status === 'idle') {
    return <Idle />;
  }
  if (status === 'pending') {
    return <Pending />;
  }
  if (status === 'resolved') {
    return <Resolved data={data} addData={addData} query={query} />;
  }
  if (status === 'rejected') {
    return <Rejected message={message} />;
  }
}
