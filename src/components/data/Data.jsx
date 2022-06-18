import React, {useState,useEffect} from 'react';
import {fetchData} from '../../features/todsMock/api'

export const Data = () => {
    const [myData, setMyData] = useState([])
    useEffect(() => {
    
        const result= fetchData();
        result
        .then(response =>{ 
          
            setMyData(response.data)
        });

    },[])
  return (
    <div>{console.log(myData)}</div>
  )
}
