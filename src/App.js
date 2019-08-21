// import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';

import './App.css';

const ERROR_QUERY = gql`
  {
    field(arg: "value") {
      subField
    }
  }
`;

const TIME_QUERY = gql`
  {
    time
  }
`;

const useTime = () =>
  useQuery(TIME_QUERY, {
    pollInterval: 2000,
  });

const App = () => {
  const { loading, error } = useQuery(ERROR_QUERY);
  // eslint-disable-next-line
  useTime();

  console.log({ loading, error });

  return JSON.stringify({ loading, error: String(error) });
};

export default App;
