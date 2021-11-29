import React, { useEffect } from 'react';

const Promise = () => {

  useEffect(() => {
    window.addEventListener("testAlert", async (e) => {
      alert('asdaedjaoijdoia')
  });

  },[])

  function testAlert() {
      alert('test')
  }

  return (
    <>
        <button onClick={testAlert} style={{float: 'right'}}>testAlert</button>
    </>
  );
}

export default Promise;