import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import UserForm from './Components/UserFrom';
import UserDetails from './Components/UserDetails';

function App() {
  let [showForm,setShowForm] = useState(false);
  let [users,setUsers] = useState([]);
  
  function showFormEventHandler(){
    setShowForm(true);
  }
  function hideFormEventHandler(){
    setShowForm(false);
  }

  function onCreateUser(user){
    // fetch("https://react-http-tutorial-6e12b-default-rtdb.firebaseio.com/users.json",{
    //   method : "POST",
    //   body : JSON.stringify(user), /*to convert js object to json*/
    // }) /*This method will send response*/
    // .then((response) => {console.log(response);})
    axios.post("https://react-http-tutorial-6e12b-default-rtdb.firebaseio.com/users.json",user)
    .then((resp) => {
      // console.log(resp.data);
    })
  }

  function fetchUsers(){
    
    fetch("https://react-http-tutorial-6e12b-default-rtdb.firebaseio.com/users.json", {method:"GET"}) /*default action is get request*/
    .then((response) => {
      return response.json();
    })
    .then((data) => { 
      let usersData=[]
      for(let key in data){
        usersData.push({...data[key],id : key});
      }
    setUsers(usersData)
    })
  }

  return (<>
     <button onClick={showFormEventHandler} >Add User</button>
     <button onClick={fetchUsers}>Get Users</button>
     <UserDetails users={users}></UserDetails>
    {showForm && <UserForm hideform={hideFormEventHandler} onCreateUser={onCreateUser}></UserForm>}
  </>
      
  );
}

export default App;
