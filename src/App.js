import React from "react";
import './App.scss';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./skills/Skills";
import Works from "./works/Works";
import MySuggestion from "./MySuggestion/MySuggestion";
import Contacts from "./Contacts/Contacts"
import Footer from "./Footer/Footer";
import styles from "./Main/Main.module.scss";
import Particles from "react-tsparticles";
import Particle from "./common/components/Particle";


function App() {
  return (
    <div className="App">
        {/*<Particle/>*/}
        <Header />
        <Main />
        <Skills />
        <Works />
        <MySuggestion />
        <Contacts />
        <Footer />
    </div>
  );
}

export default App;
