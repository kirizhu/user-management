import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import userList from '../api/users';

function UserList() {
  const [users, setUsers] = useState([]);
  const [errMsg, setErrMsg] = useState('');
  const getUsers = async () => {
    try {
      const response = await userList.get();

      setUsers(response.data);
    } catch (err) {
      setErrMsg('Something went wrong');
      console.log(err);
    }
  };
  console.log(errMsg);
  useEffect(() => {
    getUsers();
  }, []);
  console.log(users);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UserList;
