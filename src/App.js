import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './componets/Header';
import About1 from './pages/About1';
import AddEditUser from './pages/AddEditUser';
import Home from './pages/Home';
import UserInfo from './pages/UserInfo';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route  path="/addUser" component={AddEditUser}></Route>
          <Route  path="/editUser/:id" component={AddEditUser}></Route>
          <Route  path="/userInfo" component={UserInfo}></Route>
          <Route  path="/about" component={About1}></Route>
        </Switch>
      </BrowserRouter>
         
    </div>
  );
}

export default App;
