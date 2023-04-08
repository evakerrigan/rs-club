import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IUser } from '../types/Types';
import { BASE_URL } from '../constants';

export const useUser = () => {
  const { id } = useParams();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [userData, setUserDate] = useState<IUser>();
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(`${BASE_URL}/users/profile/${id}`);
        const user: IUser = await response.json();
        setUserDate(user);
      } catch (error) {
        setErrorMessage((error as Error).message);
      }
    };
    getUser();
  }, [id]);

  return { userData, errorMessage };
};
