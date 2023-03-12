import logo from './logo.svg';
import './App.css';
import Login from './component/page/admin/login/Login';
import Routing from './route/Routing';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routing>
      </Routing>
    </BrowserRouter>
  );
}

export default App;
