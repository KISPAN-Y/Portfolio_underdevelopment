import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import DjangoTips from './pages/Django_tips';
import Scalable from './pages/Scalable-react';
import reactNextjs from './pages/react-next';
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
import './assets/styles/djangotips.css';
import PreLoader from './components/PreLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  
  return (<Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          {isLoading && <PreLoader />}
          <Switch>
            <Route exact path="/">
              <Home />
              <Projects />
              <Skills />
              <Blog />
              <Contact />
            </Route>
            <Route path="/django-rest-framework-tips" component={DjangoTips} />
            <Route path="/building-scalable-react-apps" component={Scalable} />
            <Route path="/nextjs-vs-react" component={reactNextjs} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;