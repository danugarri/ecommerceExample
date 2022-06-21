import React from 'react'

export const SelectColor = ({data}) => {

    const filtered= data?.colorSizeOptions?.filter(option => option.color!== '')

    return (
        <select name="select">
            <option value='' defaultValue>{''}</option>
            { 
            filtered?.map(option => <option key= {option.skuOrigin} value= {option.color}>{option.color}</option>)
            }
        

        </select>
    )
}
