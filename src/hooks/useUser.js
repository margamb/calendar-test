import { useEffect, useState } from 'react';
import storage from '../utils/localStorage';

const useUser = () => {
  const [userData, setUserData] = useState('');

  useEffect(() => {
    const user = storage.getUser();

    if (user !== null) {
      setUserData(user);
    }
  }, []);

  return [userData, setUserData];
};

export default useUser;
