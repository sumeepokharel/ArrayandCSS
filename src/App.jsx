import React from 'react';
import styles from './App.module.css'

const names = ['Alice', 'Bob', 'Charlie', 'David'];

function App() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>List of Names:</h2>
      
      <ol className={styles.boxContainer}>
        {names.map((name, index) => (
          <li key={index} className={styles.nameList}>{name}</li>
        ))}
      </ol>
    </div>


  );
}

export default App;
