import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import RepositoryList from '../repository/repositoryList'
import Profile from '../profile/profile'
import Status from '../status/status'
import FollowerList from '../follower/followerList';
import OrganizationList from '../organization/organizationList';
import { Account } from '../interface/interface'

const GET_CURRENT_USER = gql`
{
  viewer {
    name
    login
    avatarUrl
    followers(first: 5) {
      nodes {
          avatarUrl
          name
          email
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
    repositories(first: 30){
      nodes{
        name
      }
    }
  }
}
`;

const AccountCard: React.FC = () => (
  <Query <Account> query={GET_CURRENT_USER}>
    {({ loading, error, data }) => {
      if (error) {
        return <div>Error</div>
      }
      if (!data || loading) {
        return <div>Loading...</div>;
      }
      console.log(data.viewer)
      return (
        <div className="columns">
          <div className="column is-one-quarter">
            <Profile login={data.viewer.login} name={data.viewer.name} avatar={data.viewer.avatarUrl} />
            <Status following={data.viewer.following.totalCount} gists={data.viewer.gists.totalCount} />
            <FollowerList followers={data.viewer.followers.nodes}/>
            <OrganizationList organizations={data.viewer.followers.nodes}/>
          </div>
          <div className="column is-third-quarter">
            <RepositoryList repositories={data.viewer.repositories.nodes} />
          </div>
        </div>
      );
    }}
  </Query>
);

export default AccountCard;