import { Spinner } from 'react-bootstrap'
import useUsers from '../hooks/useUsers'
import userService, { User } from '../services/userService'

const UserList = () => {
  const { users, error, isLoading, setUsers, setError } = useUsers()

  const deleteUser = (user: User) => {
    const originalUser = [...users]
    setUsers(users.filter((u) => u.id !== user.id))
    userService.delete(user.id).catch((err) => {
      setError(err.message)
      setUsers(originalUser)
    })
  }
  const addUser = () => {
    const originalUser = [...users]
    const newUser = { id: 0, name: 'Atif' }
    setUsers([newUser, ...users])
    userService
      .create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((error) => {
        setError(error.message)
        setUsers(originalUser)
      })
  }

  const updateUser = (user: User) => {
    const originalUser = [...users]
    const updatedUser = { ...user, name: user.name + ' At' }
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)))

    userService.update(updatedUser).catch((err) => {
      setError(err.message)
      setUsers(originalUser)
    })
  }

  return (
    <>
      {error && <p className='text-danger'>Api is returning {error} error</p>}
      {isLoading && <Spinner />}
      <button className='btn btn-primary mb-3' onClick={addUser}>
        Add User
      </button>
      <ul className='list-group'>
        {users.map((user) => (
          <li className='list-group-item d-flex justify-content-between' key={user.id}>
            {user.name}
            <div>
              <button className='btn btn-outline-secondary mx-2' onClick={() => updateUser(user)}>
                Update
              </button>
              <button className='btn btn-outline-danger' onClick={() => deleteUser(user)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default UserList
