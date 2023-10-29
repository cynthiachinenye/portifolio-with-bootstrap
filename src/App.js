
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Particles from 'react-tsparticles'
import { useCallback } from 'react';
import { loadSlim} from 'tsparticles-slim'

 
function App() {
  const particlesInit = useCallback(async engine =>{
     console.log(engine)
     await loadSlim(engine)
  },[]);
  const  particlesLoaded = useCallback(async container => {
    await console.log(container)
  },[])
  return (
    <div className="App">
    <Particles
    init={particlesInit}
    loaded={particlesLoaded}
    id='tsparticles'
    options={{
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
