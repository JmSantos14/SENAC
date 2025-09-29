// App.js
import './App.css';
import UserCard from './components/UserCard/usercard';
import ProfImg from './img/Prof.png';

function App() {


  return (
    <div className="App">
      <UserCard nome="Joao" cargo="Programador" imagem={ProfImg} desc="Conhecimento em várias linguagens"/>
      <UserCard nome="Maria" cargo="Adm" imagem={ProfImg} desc="Sou agil com tarefas de excel"/>
      <UserCard nome="Pedro" cargo="Cineasta" imagem={ProfImg} desc="Bom em contratar membros"/>
    </div>
  );
}

export default App;
