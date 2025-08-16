import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import './assets/styles/main.css';
import './assets/styles/variables.css';
import './assets/styles/animations.css';
import './assets/styles/about.css'
import './assets/styles/blog.css'
import './assets/styles/contact.css'
import './assets/styles/home.css'
import './assets/styles/projects.css'
import './assets/styles/skills.css'
import './assets/styles/corousel.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Switch>
            <Route exact path="/">
              <Home />
              <Projects />
              <Skills />
              <Contact />
              <Blog />
            </Route>
            <Route path="/about" component={About} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;