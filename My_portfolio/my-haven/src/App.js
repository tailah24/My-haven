import React from 'react'
import Home from './pages/Home'
import Footer from './components/Footer'
import SearchPage from './components/SearchPage'
import Test2 from './components/Test2'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
       {/* < Test1 /> */}
       <Switch> 

        <Route path='/search'>
          < Test2 />
           < SearchPage />
        </Route>
        <Route path='/'>
           < Home />
           </Route>
       </Switch>

        < Footer />
      </Router>
    </div>
  );
}

export default App
