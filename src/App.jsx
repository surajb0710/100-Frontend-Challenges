import style from './App.module.css';
import ECommerceProductCard from './components/ECommerceProductCard';
import ProfileCard from './components/ProfileCard';

const App = () => {
  return (
    <>
      <h1 className={style.repoTitle}>100 FREE Frontend Challenges</h1>
      <div className={style.mainContainer}>
        {/* <ProfileCard /> */}
        <ECommerceProductCard />
      </div>
    </>
  );
};

export default App;
