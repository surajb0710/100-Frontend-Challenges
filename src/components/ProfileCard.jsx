import style from './ProfileCard.module.css';
import facebook from '../assets/facebook.svg';
import dribble from '../assets/dribble.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import profile from '../assets/group.svg';

const ProfileCard = () => {
  return (
    <div className={style.profileCard}>
      <div className={style.profileDesign}>
        <img src={profile} className={style.socialMediaIcona} />
      </div>
      <div className={style.profileImageContainer}>
        <img
          src="https://images.unsplash.com/photo-1542404447-db94622698c6"
          alt="cat pic"
          className={style.profileImage}
        />
      </div>
      <h1 className={style.userName}>John Doe</h1>
      <h6 className={style.userid}>@johndoe</h6>
      <div className={style.socialHandlesContainer}>
        <img
          src={facebook}
          alt="facebook logo"
          className={style.socialMediaIcon}
        />
        <img
          src={linkedin}
          alt="linkedin logo"
          className={style.socialMediaIcon}
        />
        <img
          src={twitter}
          alt="twitter logo"
          className={style.socialMediaIcon}
        />
        <img
          src={instagram}
          alt="instagram logo"
          className={style.socialMediaIcon}
        />
        <img
          src={dribble}
          alt="dribble logo"
          className={style.socialMediaIcon}
        />
      </div>
      <p className={style.profileSummary}>
        Crafting brand and communication strategies, creating visual designs,
        leading art direction, and capturing portraits through photography.
      </p>
      <div className={style.buttonsContainer}>
        <button className={style.followBtn}>Follow</button>
        <button className={style.messageBtn}>Message</button>
      </div>
    </div>
  );
};

export default ProfileCard;
