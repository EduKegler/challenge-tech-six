import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Avatar from '../avatar/avatar'
import Repositories from '../repositories/repositories'
// import Profile from '../profile/profile'

const GET_CURRENT_USER = gql`
{
  viewer {
    name
    login
    avatarUrl
    followers(first: 5) {
      edges {
        node {
          avatarUrl
          name
          email
        }
      }
    }
    following {
      totalCount
    }
    gists {
      totalCount
    }
    organizations {
      totalCount
    }
  }
}
`;

interface Account {
  viewer: {
    login: string
    name: string
    avatarUrl: string
  }
}

const Account: React.FC = () => (
  <Query <Account, Number> query={GET_CURRENT_USER}>
    {({ loading, error, data }) => {
      if (error) {
        return <div>Error</div>
      }
      if (!data || loading) {
        return <div>Loading...</div>;
      }
      console.log(data.viewer.avatarUrl)
      return (
        <div className="columns">
          <div className="column is-one-quarter">
            <div className="card">
              <Avatar avatar={data.viewer.avatarUrl} />
              {/* <Profile login={data.viewer.login} name={data.viewer.name} /> */}
            </div>
          </div>
          <div className="column is-third-quarter">
            <Repositories repositories={[]} />
          </div>
        </div>
      );
    }}
  </Query>
);

export default Account;