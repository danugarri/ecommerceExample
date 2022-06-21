import React, { useState, useEffect } from 'react';
import { getAsyncData } from '../../features/todsMock/getDataSlice';
import { SelectSize } from '../selectSize/SelectSize';
import { SelectColor } from '../selectColor/SelectColor';
import { useDispatch } from 'react-redux/es/exports';

export const Data = () => {
  const [fetchedData, setFetchedData] = useState({});
  const dispatch= useDispatch();
  useEffect(() => {
    const result = dispatch(getAsyncData());

    setFetchedData(result);
  }, [dispatch]);

  return (
    <>
      <SelectColor data={fetchedData} />
      <SelectSize data={fetchedData} />
    </>
  );
};
