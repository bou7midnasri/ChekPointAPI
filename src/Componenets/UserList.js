import  { useState, useEffect } from 'react'
import axios from "axios";
import './UserList.css';

const UserList = () => {
    const [users, setusers] = useState([]);

    const getUsers =async()=>{
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users');
            setusers(res.data);
        } catch (err) {
            console.log("Error", err)
        }
        
    };
  useEffect(() => {
    getUsers();
  }, []);
    return (
        <div>
            <p>
                {users.map((user, key) => (
                    <div className="container">
                     <span key={key}>{user.name}</span>
                    </div>
                )

                )}
            </p>
        </div>
    );
};
export default UserList
