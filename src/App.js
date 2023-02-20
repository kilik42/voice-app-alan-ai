import React, { useEffect } from 'react';
import './App.css';
import * as dotenv from 'dotenv';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';

dotenv.config();

// const configuration = new Configuration({
//     alanKey: process.env.API_KEY ,
// });

const alanKey = process.env.REACT_APP_API_KEY ;

function App() {

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({  }) => {
        if (command === 'testCommand') {
          alert('This code was executed');
        }
      }
    })
  }, [])
  return (
    <div className="App">
     <h1>Alan Ai news application</h1>
      
    </div>
  );
}

export default App;
