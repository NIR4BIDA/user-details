import Header from './components/Header/Header'
import InputForm from './components/InputForm/InputForm'
import UserList from './components/UsersList/UserList'
import {useState} from 'react'
function App() {
  const [users,setUsers]=useState([]);
  const addUser=(InputUser) =>
  {
      setUsers((prev)=>{
        return ([InputUser,...prev,]);
      }
      );
  }
  return(
    <div>
    <Header/>
    <InputForm addUser={addUser}/>
    {users.length===0?<p style={{textAlign: 'center'}}>There are no registered users.</p>:
    <UserList users={users}/>
    }
    </div>
  );
}

export default App;
