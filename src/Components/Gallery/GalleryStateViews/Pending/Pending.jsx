import Logo from '../../../../images/logo.svg';
import s from './Pending.module.css';
export default function Pending() {
  return (
    <div className="wrapper">
      <h2 className={s.title}>Loading...</h2>
      <img
        className={s.icon}
        src={Logo}
        alt="react icon"
        width="300px"
        height="300px"
      />
    </div>
  );
}
