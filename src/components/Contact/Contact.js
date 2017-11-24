import React from 'react';
import PropTypes from 'prop-types';
import icons from 'font-awesome/css/font-awesome.min.css';
import styles from './Contact.css';

const Contact = (props) => {
  return (
    <div className={ styles.contact }>
      <img src={ props.contactData.imgUrl } alt="photo not available" className={ styles.profilePhoto } />
      <div className={ styles.profileDescription }>
        <span> { props.contactData.name } </span>
        <br />
        <span> { props.contactData.phoneNumber } </span>
        <div className={ styles.closeButton } >
          <i className={ styles.fa + ' ' + icons.fa + ' ' + icons['fa-times'] } />
        </div>
        <div className={ styles.editButton } >
          <i className={ styles.fa + ' ' + icons.fa + ' ' + icons['fa-pencil-square-o'] } />
        </div>
      </div>
    </div>
  );
};

Contact.PropTypes = {
  contactData: PropTypes.object.isRequired
}

export default Contact;
