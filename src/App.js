import logo from './logo.svg';
import './App.css';
import C01componente from './componente/C01componente';
import C02contador from './componente/C02contador';
import C03componentedobleestado from './componente/C03componentedobleestado';

function App() {
  return (
    <div>
      <h1>Componente 1</h1>
      <C01componente/>
      <h1>Componente 2</h1>
      <C02contador/>
      <h1>Componente 3</h1>
      <C03componentedobleestado/>
    </div>
  );
}

export default App;
