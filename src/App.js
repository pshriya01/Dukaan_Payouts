import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MainRoutes from './Routes/MainRoutes';

function App() {
  return (
    <div className="App" style={{display:"flex",height:"100vh",margin:"0px",padding:"0px",width:"100%"}}>
       {/* <style>
        {`
         
         @import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@900&display=swap');
      
          body {
            font-family: 'Darker Grotesque', sans-serif;
          }
        `}
      </style> */}
    <div style={{width:"224px",backgroundColor:"#1E2640",height:"100vh",justifyContent:"space-between"}}>
    <Navbar />
    </div>
     <div style={{width:"calc(100% - 224px)",backgroundColor:"#FAFAFA"}}>
     <MainRoutes />
     </div>
    </div>
  );
}

export default App;
