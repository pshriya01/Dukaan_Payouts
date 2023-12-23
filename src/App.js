import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MainRoutes from './Routes/MainRoutes';

function App() {
  return (
    <div className="App" style={{display:"flex",height:"100vh",margin:"0px",padding:"0px",width:"100%"}}>
    <div style={{width:"224px",backgroundColor:"#1E2640",height:"100vh",justifyContent:"space-between",border:"1px solid blue"}}>
    <Navbar />
    </div>
     <div style={{width:"calc(100% - 224px)",backgroundColor:"#FAFAFA"}}>
     <MainRoutes />
     </div>
    </div>
  );
}

export default App;
