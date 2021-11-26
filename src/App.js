
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home';
import MoreServices from './Components/MoreService/MoreServices';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

import Students from './Components/Students/Students';

function App() {
 

 
  return (
    <div className="App">
      <BrowserRouter>
         <Header></Header>
          <Switch>
                
          <Route exact  path="/">
                  <Home></Home>
            </Route>
              <Route to path ="/home">
                    <Home></Home>
            </Route> 
            
            <Route to path ="/about">
                    <About></About>
            </Route>    
            <Route to path = "/services">
              <MoreServices></MoreServices>
            </Route>
            <Route to path = "/students">
              <Students></Students>
            </Route>
           

            <Route to path="*" >
                  <NotFound></NotFound>
            </Route>
            
                 
              
          </Switch>
          <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
