import baca from './baca2.jpg';
import bac from './baca1.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="heading">Barcelona Team</h1>
      <p className="details">Barcelona Football Club, commonly 
         referred to as Barcelona and colloquially known as Barça
         , is a professional football club based in 
         Barcelona, Catalonia, Spain, that competes in La Liga, 
         the top flight of Spanish football.Founded in 1899 by a 
         group of Swiss, Catalan, German, and English footballers 
         led by Joan Gamper, the club has become a symbol of Catalan 
         culture and Catalanism, hence the motto "Més que un club" 
         ("More than a club"). Unlike many other football clubs, 
         the supporters own and operate Barcelona. It is the 
         fourth-most valuable sports team in the world, 
         worth $4.76 billion, and the world's fourth richest 
         football club in terms of revenue.</p>
         <img src={baca} alt="baca" />
         <p>I really have a strong admiration for this club and will support them any time'</p>
         <img src={bac} alt="baca team" />
    </div>
  );
}

export default App;
