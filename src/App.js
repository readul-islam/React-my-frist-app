import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
    <Friend name = "Akash Mahamud" phone = "01758819483"></Friend>
    <Friend name = "Sagor Mahamud" phone = "01979480309"></Friend>
    <Friend name = "jubeyr Ahamed" phone = "01904897570"></Friend>
    
    <Team name = "Readul Islam" aim = "MERN Stack Developer"></Team>
    <Team name = "Nahid" aim = "Developer"></Team>
    <Team name = "Jubyer Ahamed" aim = "MERN Stack Developer"></Team>
    
    
    </div>
  );
};

function Friend (props) {
  
 return(
   <div className="player">
     <h1>{props.name}</h1>
     <h4>{props.phone}</h4>
   </div>
 )
};

function Team (props){
  console.log(props);
  return(
    <div className="teamMember">
      <h1>{props.name}</h1>
      <h4>{props.aim}</h4>
    </div>
  )
};

export default App;
