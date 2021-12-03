import React, { useEffect, useState } from 'react';

export function testAlert() {
  alert('test')
}

const Promise = () => {
  const [ number, setNumber ] = useState(0);
  
  useEffect(() => {
    window.addEventListener("testAlert", async (e) => {
      alert('asdaedjaoijdoia')
    })
    window.addEventListener("numberAdd", async (e) => {
      alert('numberAdd')
    })
  },[]);
  
  const NumberAdd = () => {
    setNumber(number+1)
  }
  

  return (
    <>
        <button onClick={testAlert} style={{float: 'right'}}>testAlert</button>
        <div style={{position: 'absolute', top: '50%', left:'50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column'}}>
          <div style={{float: 'right'}}>{number}</div>
          <button onClick={NumberAdd} style={{float: 'right'}}>numberAdd</button>
        </div>
    </>
  );
}

export default Promise;