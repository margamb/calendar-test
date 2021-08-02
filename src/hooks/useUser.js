import useLocalStorage from './useLocalStorage';

const LOCAL_STORAGE_USER_KEY = 'timekids-user';


function useUser() {
    const [userData, setUserData] = useLocalStorage(LOCAL_STORAGE_USER_KEY, '');

    return [userData, setUserData]
}

export default useUser