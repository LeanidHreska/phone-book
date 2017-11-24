import React, { Component } from 'react';
import Contact from './Contact/Contact';
import SearchBlock from './SearchBlock/SearchBlock';

class App extends Component {
  render() {
    const contactArray = [
      {
        id: 1,
        imgUrl: "https://goo.gl/ikPF3r",
        name: 'ivan',
        phoneNumber: 375441234567
      },
      {
        id: 2,
        imgUrl: "https://goo.gl/ikPF3r",
        name: 'leha',
        phoneNumber: 375447654321
      }
    ];
    return (
      <main>
        <SearchBlock />
        { 
          contactArray.map((contactData) => {
            return <Contact contactData={ contactData } key={ contactData.id } />
          })
        }
      </main>
    );
  }
}

export default App;
