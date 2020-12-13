import s from './Idle.module.css';
import defaultImg from '../../../../images/emptyList.png';

export default function Idle() {
  return (
    <div className="wrapper relative">
      <h1 className={s.title}>Input some Query for search Img</h1>
      <img className={s.img} src={defaultImg} alt="empty list"></img>
    </div>
  );
}
