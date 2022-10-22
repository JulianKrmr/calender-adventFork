import React, { useState } from "react";
import ReactLoading from 'react-loading';
import CalenderDay from './components/CalenderDay';
import Header from './components/Header';
import './App.css';

function App() {
  
  function calculateDoorNumbers(array) {
    const date = new Date();
    const month = date.getMonth();
    console.log(month);
    if(date.getMonth() === 9) { // Change to 11="December" for deploying
        let day = date.getDate();
        let k = 1;
        while (k<=day){
            array.push(k);
            k++;
        }
        return array;
    } else {
        return array;
    }
  } 
  let calenderDoors = [];

  calculateDoorNumbers(calenderDoors);
  const doorCards = [];

  for(let info of calenderDoors) {
      doorCards.push(<CalenderDay id={info} > </CalenderDay>);
  }

  if(calenderDoors.length === 0) {
      return(
          <div>
              <div className='spinner'>
                  <ReactLoading type={"spin"} height={500} width={500}></ReactLoading>
                  <h1>Please wait until December</h1>
              </div>
      </div>
      );
  } else {
      return(
          <div>
              <Header/>
              <div className='container-card'>
                  {doorCards}
              </div>
          </div>
      );
  }
}

export default App;
