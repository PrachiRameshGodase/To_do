import React from 'react'
import "./TodoList.css";


function TodoList(props) {
    const{itemlist,deleteitem,edititem}=props
  return (
    <ul >
      {itemlist.length !==0 ?
        itemlist.map((val)=>{
        return(
            <div  className='itemlist'key={val.id} >
            <div >{val.itemname}</div>
            <div className='btn1'>
              <button className=' red' onClick={()=>deleteitem(val.id)}>Delete</button>

              <button className='yello' onClick={()=>edititem(val.id)}>Edit</button>
            </div>
            </div>

           
            
        )
      }):"No item display"} 
    </ul>
  )
}

export default TodoList
