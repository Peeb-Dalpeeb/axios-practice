import { useUsers } from '../../hooks/useUsers';

export const UserList = () => {
  const { users, addUser, updateUserRole, deleteUser } = useUsers();
  return (
    <div>
      <button onClick={() => addUser('John Doe')}>Add User</button>
      <h2>Users</h2>
      <ul>
        {users.map(({ id, name, role }) => (
          <li key={id}>
            {name} ({role}){' '}
            <button onClick={() => updateUserRole(id, 'Admin')}>
              Make Admin
            </button>
            <button onClick={() => deleteUser(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
