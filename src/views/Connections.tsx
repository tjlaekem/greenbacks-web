import React, { FunctionComponent } from 'react';

import { queries, useQuery } from 'api';
import LoadingIndicator from 'components/LoadingIndicator';
import { Link } from 'routing';
import Connector from 'views/Connector';

const Connections: FunctionComponent = () => {
  const { data: tokenResponse } = useQuery(
    queries.getConnectionInitializationToken,
    {
      fetchPolicy: 'network-only',
    }
  );
  const { data: connectionsResponse } = useQuery(queries.getConnections);

  const initializationToken = tokenResponse?.getConnectionInitializationToken;
  const connections = connectionsResponse?.getConnections;

  const isLoading = !initializationToken || !connections;

  if (isLoading) return <LoadingIndicator />;

  return (
    <>
      <Link to="/">home</Link>
      <h1>Connections</h1>
      <ul>
        {connections.map((connection: Connection) => (
          <li key={connection.id}>{connection.institution.name}</li>
        ))}
      </ul>
      <Connector initializationToken={initializationToken} />
    </>
  );
};

interface Connection {
  id: string;
  institution: {
    name: string;
  };
}

export default Connections;
