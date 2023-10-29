
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Particles from 'react-tsparticles'

function App() {
  return (
    <div className="App">
    <Particles
    className='particles-canvas'
    params={{
      particles:{
        number:{
          value: 30,
          density:{
            enable:true,
            value_area:900
          }
        }
      }
    }}/>
  <Navbar/>
  <Header/>
</div>
  );
}

export default App;
