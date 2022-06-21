import React, {useState,useEffect} from 'react';
import {fetchData} from '../../features/todsMock/api'
import { SelectSize } from '../selectSize/SelectSize';
import { SelectColor } from '../selectColor/SelectColor';

export const Data = () => {
    const [fetchedData, setFetchedData] = useState({})
    useEffect(() => {
        const result= fetchData();
        result
        .then(response =>{ 
          
            setFetchedData(response.data)
        });
    },[])
  return (
    <>
      <SelectColor data= {fetchedData} />
      <SelectSize data= {fetchedData} />
    </>
    )
}
