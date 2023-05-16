import React from 'react'
import { useSelector } from 'react-redux';

/*
    enum là 1 object gồm
    laundryForms
    paidBys
    pieceTypes
    productTypes
    specialInstructions
*/

export const useEnumData = () => {
  const enumData = useSelector((state) => state.enumData.enumData);
  let newEnumData = {}

  if(Object.keys(enumData || {}).length > 0 && enumData){
    if(enumData.laundryForms.length > 0){
      newEnumData.laundryForms = enumData.laundryForms.map(item => ({...item, label: item.name}))
    }

    if(enumData.paidBys.length > 0){
      newEnumData.paidBys = enumData.paidBys.map(item => ({...item, label: item.name}))
    }

    if(enumData.pieceTypes.length > 0){
      newEnumData.pieceTypes = enumData.pieceTypes.map(item => ({...item, label: item.name})).filter(subItem => subItem.value !== "others")
    }

    if(enumData.productTypes.length > 0){
      newEnumData.productTypes = enumData.productTypes.map(item => ({...item, label: item.name}))
    }
  
    if(enumData.specialInstructions.length > 0){
      newEnumData.specialInstructions = enumData.specialInstructions.map(item => ({...item, label: item.name}))
    }
  }
 
  return newEnumData;
};
