import React, { useEffect } from 'react';
import { useLocationSearch } from '../../libs/hooks/useLocationSearch';

const Promise = () => {
  function testAlert() {
    alert('test')
  }

  return (
    <>
      <button onClick={testAlert}>testAlert</button>
    </>
  );
}

export default Promise;