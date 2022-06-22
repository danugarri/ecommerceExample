import { useEffect, useState } from 'react';
import { fetchData } from '../../../features/todsMock/getData';
import { getAsyncData } from '../../../features/todsMock/getDataSlice';
import { useDispatch } from 'react-redux/es/exports';

export const UseData = () => {
  const dispatch = useDispatch();
  const [fetchedData, setFetchedData] = useState({});
  useEffect(() => {
    // push data to redux
    dispatch(getAsyncData());
    const result = fetchData();
    result.then((response) => {
      setFetchedData(response.data);
    });

    setFetchedData(result);
  }, [dispatch]);
  return [fetchedData];
};
