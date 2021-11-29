import React from 'react';

const Promise = () => {

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