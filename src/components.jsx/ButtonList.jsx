import React from 'react'
import Button from './Button'
const item = ["All","Gaming","Football","Music","Songs","Coding","Soccer","Cricket","Live","Cooking","News","Music","Songs","Coding"];
function ButtonList() {
  
  return (
    <div className='flex font-medium'>
      {item.map ((items,index)=> {
        return   <Button key={index} name = {items}/>
      })}
      {/* <Button name = "All"/> */}
      {/* <Button name = "Gaming"/>
      <Button name = "Songs"/>
      <Button name = "Coding"/>
      <Button name = "Soccer"/>
      <Button name = "Cricket"/>
      <Button name = "Live"/>
      <Button name = "cooking"/>
      <Button name = "News"/>
      <Button name = "Coding"/>
      <Button name = "Soccer"/>
      <Button name = "Cricket"/>
      <Button name = "Live"/>
      <Button name = "cooking"/> */}
      
    </div>
    
  )
}

export default ButtonList