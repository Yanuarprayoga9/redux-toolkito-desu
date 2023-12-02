// App.js
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./features/userSlice";
function App() {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.users);


  useEffect(() => {
    // Dispatch the fetchCompanies action when the component mounts
    dispatch(fetchUsers())
      .then(() => {
        setUsers(user);
      })
  },[dispatch,user]);

  return (
    <>

      {users.map(user => {
        return (
          <div className="" key={user.id}>
            <h1>{user.name} <a href={`/user/${user.id}`}>hapus</a></h1>
            
          </div>
        )
      })}
    </>
  );
}

export default App;
