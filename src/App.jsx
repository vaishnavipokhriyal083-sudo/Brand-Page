//used to imoport css in the jsx
import './App.css';
//import navigation component in app.jsx file
import Navigation from './component/Navigation';
import HeroSection from './component/Hero';
const App = () => {
  return (
    <div>
     <Navigation/>
     <HeroSection/>
    </div>
  );
};
export default App;
