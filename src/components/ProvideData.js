import React, { Component } from 'react';
import { connect } from 'react-redux';
import Contact from './Contact/Contact';
import SearchBlock from './SearchBlock/SearchBlock';

class ProvideData extends Component {
  render() {
    /*const contactArray = [
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
    ];*/
    return (
      <main>
        <SearchBlock />
        { 
          this.props.contactArray.map((contactData) => {
            return <Contact contactData={ contactData } key={ contactData.id } />
          })
        }
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    contactArray: state.contactArray
  }
}

export default connect(mapStateToProps)(ProvideData);
