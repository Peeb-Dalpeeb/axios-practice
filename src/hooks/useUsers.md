import { useState, useEffect } from 'react';
// We import our 'api' instance so we don't have to type the full URL every time.
import { api } from '../api/axiosInstance';
// We use 'import type' to tell TS we only need the definition, which keeps the build slim.
import type { User } from '../types';

/**
 * Custom Hook: useUsers
 * This is the 'Brain' of our user logic. It handles the 'Side Effect' 
 * of talking to the server so the UI Component can stay 'Dumb' and clean.
 */
export const useUsers = () => {
  // 1. THE STATE
  // We initialize with an empty array []. 
  // <User[]> ensures TypeScript only allows us to store valid User objects here.
  const [users, setUsers] = useState<User[]>([]);

  // 2. THE SIDE EFFECT
  // useEffect handles actions that happen 'outside' of React (like network calls).
  useEffect(() => {
    
    // 3. THE ASYNC WORKER
    // useEffect cannot be 'async' itself, so we create this internal worker function.
    const fetchUsers = async () => {
      // 4. THE PAUSE (await)
      // We 'await' the response, meaning the code stops here until the server answers.
      // Axios puts the actual JSON array inside the '.data' property.
      const response = await api.get('/users');
      
      // 5. THE UPDATE
      // Once we have the data, we put it into our state 'box'.
      // This automatically tells React to re-render the UI with the new names.
      setUsers(response.data);
    };

    // 6. THE IGNITION
    // Defining the function above doesn't start it. We must call it here.
    fetchUsers();

  // 7. THE GUARD DOG (Dependency Array)
  // The empty brackets [] mean: "Run this whole block exactly ONCE when the 
  // component loads, and NEVER again." This prevents infinite fetching loops.
  }, []);

  // 8. THE OUTPUT
  // We return the users array inside an object so the UI component can 'catch' it.
  return { users };
};


