import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Header from './components/header'
import Footer from './components/footer'


function App() {
  return (
    <div className='container'>
      <Header />
      <Switch>
        <Route path='/contact' component={Contact} />

        <Route path='/about' component={About} />

        <Route path='/' component={Home} />

      </Switch>
      <Footer/>
      </div>
    
  );
}

export default App;
