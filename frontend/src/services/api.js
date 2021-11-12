import axios from 'axios';

// Set the default baseURL for the API
axios.defaults.baseURL = process.env.REACT_APP_API;

export const postSubscription = ({
  name,
  email,
  institute,
  state,
}) => {
  const params = {
    name,
    email,
    institute,
    state,
  };

  return axios.post('/subscription/', params).then((res) => res);
};

export const getSubscriptions = () => {
  // Only considering participants that were activated:
  const params = { pageSize: 99999 };

  return axios
    .get('/subscription/', { params })
    .catch((err) => err)
    .then((res) => res.data);
};
