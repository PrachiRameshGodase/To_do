// import logo from './logo.svg';
import { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import TodoList from './Components/TodoList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [item,setitem]=useState("mango")
  const [itemlist,setitemlist]=useState([])
  const [togglebtn,settogglebtn]=useState(false)
  const [itemmid,setitemid]=useState()
  const changeHandler=(e)=>{
    setitem(e.target.value)
  }
  const Additem=()=>{
    if(togglebtn){
      const newlist=itemlist.map((todo)=>{
         if(todo.id===itemmid){
          return {...todo,itemname:item}
         }
         return todo
      })
      setitemlist(newlist)
      settogglebtn(false)
      setitem([])
    }else{
      const objitem={id:uuid(),itemname:item}
    setitemlist((previtem)=>[...previtem,objitem])
    setitem("")
    toast.success("Item Added Successfully.....")
    }
    
    
  }
  const deleteitem=(id)=>{
    console.log(id)
     const filteritem=itemlist.filter((value)=>{
      return  value.id !== id
     })
     setitemlist(filteritem)
    //  toast.success("Item Deleted Successfully.....")
    toast.error('🦄Item Deleted Successfully..... !', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
     
  }
  const DeleteAll=()=>{
    setitemlist([])
    toast.error("All Item Deleted Successfully.....")
   
  }
  function edititem(id){
    const todoedit=itemlist.find((todo)=>{
     return todo.id===id
    })
    setitem(todoedit.itemname);
    settogglebtn(true)
    setitemid(id)
  }
  
  return (
    <div style={{display:"flex",justifyContent:'center',alignContent:'centers'}}>
    <div className="App">
    <h1>React Todo-List-App</h1>
    <div className='Upper-half'>
      <div className='inp-div'>
      <label>Title:   </label>
        <input type='search' placeholder='Todo-list....' value={item} onChange={changeHandler}/>
      </div>
      <div className='btn-div'>
        <button className='Add-btn' onClick={Additem} disabled={item.length<=0 ?true:false}>{togglebtn ?"Update Item" :"Add Item"}</button>
         <button className='delete-btn' onClick={DeleteAll}>Delete All</button>
      </div>
    </div>
    <br/>
    <div className='lowerHalf'>
    <TodoList itemlist={itemlist} deleteitem={deleteitem} edititem={edititem}/>
    <ToastContainer theme='colored'/>
    </div>
    </div>
    </div>
  );
}

export default App;
