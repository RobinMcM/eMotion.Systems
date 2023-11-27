import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';

export const loader = (queryClient) => async () => {
    const data = await queryClient.ensureQueryData(statsQuery);
    return null;
  };

const Monitoring = () => {

    return <h3>Safely Monitoring your Workforce</h3>

};

export default Monitoring;