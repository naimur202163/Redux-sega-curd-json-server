import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './pages/about';
import AddEditUser from './pages/AddEditUser';
import Home from './pages/Home';
import UserInfo from './pages/UserInfo';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/addUser" component={AddEditUser}></Route>
          <Route exact path="/editUser/:id" component={AddEditUser}></Route>
          <Route exact path="/userInfo" component={UserInfo}></Route>
          <Route exact path="/about" component={About}></Route>
        </Switch>
      </BrowserRouter>
          <h2 className='fb-bold'>Naimur Rahman</h2>
    </div>
  );
}

export default App;
