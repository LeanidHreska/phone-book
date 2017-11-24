import React from 'react';
import styles from './SearchBlock.css';

const SearchBlock = () => {
  return (
    <div className={ styles.searchBlock }>
      <form>
        <input type="text" className={ styles.searchInput } placeholder="Enter the name" />
      </form>
    </div>
  );
};

export default SearchBlock;
