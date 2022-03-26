import React from "react";
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./skills/Skills";
import Works from "./works/Works";
import MySuggestion from "./MySuggestion/MySuggestion";
import Contacts from "./Contacts/Contacts"
import Footer from "./Footer/Footer";
import Contacts1 from "./Contacts/Contacts1";


function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Skills />
        <Works />
        <MySuggestion />
        <Contacts />
        {/*<Contacts1/>*/}
        <Footer />
    </div>
  );
}

export default App;
