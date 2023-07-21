import logo from './logo.svg';
import './App.css';
import C01componente from './componente/C01componente';
import C02contador from './componente/C02contador';
import C03componentedobleestado from './componente/C03componentedobleestado';
import C04variable from './componente/C04variable';
import C05operador from './componente/C05operador';
import C06matriz from './componente/C06matriz';
import C07matrizoperaciones from './componente/C07matrizoperaciones';

function App() {
  return (
    <div>
      <h1>Componente 1</h1>
      <C01componente/>
      <h1>Componente 2</h1>
      <C02contador/>
      <h1>Componente 3</h1>
      <C03componentedobleestado/>
      <h1>Componente 4</h1>
      <C04variable xVariable="Holaa, que tal?"/>
      <h1>Componente 5</h1>
      <C05operador/>
      <h1>Componente 6</h1>
      <C06matriz/>
      <h1>Componente 7</h1>
      <C07matrizoperaciones/>
    </div>
  );
}

export default App;
