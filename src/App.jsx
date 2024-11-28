import style from './App.module.css';
import ProfileCard from './components/ProfileCard';

const App = () => {
  return (
    <>
      <h1 className={style.repoTitle}>100 FREE Frontend Challenges</h1>
      <div className={style.mainContainer}>
        <ProfileCard />
      </div>
    </>
  );
};

export default App;
