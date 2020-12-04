import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import userList from '../api/users';
import { useHistory } from 'react-router-dom';

function UserList() {
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [errMsg, setErrMsg] = useState('');
  const getUsers = async () => {
    try {
      const response = await userList.get('/users');
      setUsers(response.data);
    } catch (err) {
      setErrMsg('Something went wrong');
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const editUser = (id) => {
    history.push(`/add/${id}`);
  };
  const viewUser = (id) => {
    history.push(`/user/${id}`);
  };
  const deleteUser = async (id) => {
    try {
      await userList.delete(`/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      setErrMsg('Something went wrong');
    }
  };

  return (
    <div>
      {errMsg ? (
        <p>{errMsg}</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
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
                <td>
                  <Button variant='info' onClick={() => editUser(user.id)}>
                    Edit
                  </Button>{' '}
                  <Button variant='danger' onClick={() => deleteUser(user.id)}>
                    Delete
                  </Button>{' '}
                  <Button variant='success' onClick={() => viewUser(user.id)}>
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default UserList;
