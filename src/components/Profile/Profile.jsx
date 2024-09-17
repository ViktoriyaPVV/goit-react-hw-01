import s from "./Profile.module.css";

const Profile = ({ image, tag, location, stats, name }) => {
  return (
    <>
      <div className={s.profile}>
        <div className={s.container}>
          <img className={s.img} src={image} />
          <p className={s.name}>{name}</p>
          <p className={s.tag}>@{tag}</p>
          <p className={s.location}>{location}</p>
        </div>

        <ul className={s.list}>
          <li className={s.item}>
            <span className={s.stats}>Followers</span>
            <span className={s.stats_value}>{stats.followers}</span>
          </li>
          <li className={s.item}>
            <span className={s.stats}>Views</span>
            <span className={s.stats_value}>{stats.views}</span>
          </li>
          <li className={s.item}>
            <span className={s.stats}>Likes</span>
            <span className={s.stats_value}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
