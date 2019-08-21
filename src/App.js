import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo";

import "./App.css";

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

const logs = [];

const App = () => {
  const { loading, error } = useQuery(ERROR_QUERY);

  useQuery(TIME_QUERY, {
    pollInterval: 2000
  });

  console.log({ loading, error });

  logs.push(JSON.stringify({ loading, error: String(error) }));

  return logs.map(log => <div>{log}</div>);
};

export default App;
