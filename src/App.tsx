// src/App.tsx
import { useEffect, useState } from 'react';
import supabase from './supabaseClient';
import { User } from './types'; // User 타입이 정의된 위치에서 import

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('example').select('*');
      console.log(data);

      if (error) {
        console.log('error=> ', error);
      } else {
        console.log('data=> ', data);
        setUsers(data || []);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h3>유저정보</h3>
      {users.map((user) => (
        <div key={user.id}>
          <h5>나이: {user.age}</h5>
          <h5>주소: {user.address}</h5>
        </div>
      ))}
    </div>
  );
}

export default App;
