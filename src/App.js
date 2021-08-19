import './App.scss';
import LogoImg from './assets/Logo/Logo-brainflix.svg'
import Avatar from './assets/images/Mohan-muruge.jpg'

function App() {
  return (
    <header>
      <div className= "header">
        <img className= 'header__img' src= {LogoImg} alt="logo-img" />
        <input className= "header__search-bar" type= "text" placeholder= "Search"/>

        <div className= "header__upload-box">
          <button className="header__button" type="submit">UPLOAD</button>

          <div className="header__img-box">
              <img className="header__avatar" src= {Avatar} alt="mohan-img"/>
          </div>

        </div>

      </div>

    </header>

  );
}

export default App;
