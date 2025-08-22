import React, { useEffect, useState } from "react";
import axios from "axios";
const Dashboard = () =>{
    const[users, setUsers] = useState([])
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const limit = 30;
    useEffect(()=>{
        const skip = limit * (page - 1);
        axios.get(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)
        .then((response)=>{
            setUsers(response.data.users);
            setTotal(response.data.total);
        })
        .catch((error)=>{
            console.error('Data Not Fetching', error);
        });
    },[page]);
    console.log(users);
    const totalPages = Math.ceil(total / limit);
    return(
        <div>
            <h1>User Listing</h1>
            {users.map((user)=>(
                <div key={user.id} className="users">
                    <div>{user.firstName} {user.maidenName} {user.lastName}</div>
                    <div>{user.email}</div>
                    <div>{user.gender}</div>
                    <div>{user.phone}</div>
                </div>
            ))}
            <div>
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <span> Page {page} of {totalPages} </span>
        <button disabled={page >= totalPages} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
        </div>
    );
}

export default Dashboard;