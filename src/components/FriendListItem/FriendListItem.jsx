import s from "../FriendList/FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <img className={s.img} src={avatar} alt="Avatar" width="48" />
      <p className={s.name}>{name}</p>
      {isOnline ? (
        <p className={s.online}>Online</p>
      ) : (
        <p className={s.offline}>Offline</p>
      )}
    </>
  );
};

export default FriendListItem;
