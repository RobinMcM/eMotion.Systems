import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';

export const loader = (queryClient) => async () => {
    const data = await queryClient.ensureQueryData(statsQuery);
    return null;
  };

const Timesheets = () => {

      return <h3>Timesheets</h3>

};

export default Timesheets;