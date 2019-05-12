import React from 'react';
import { Query } from 'react-apollo';
import RepositoryList from '../repository/repositoryList'
import Profile from '../profile/profile'
import Status from '../status/status'
import FollowerList from '../follower/followerList';
import Loading from '../loading/loading'
import OrganizationList from '../organization/organizationList';
import { Account } from '../interface/interface'
import { GET_CURRENT_USER } from '../../query'

const AccountCard: React.FC = () => (
  <Query <Account> query={GET_CURRENT_USER}>
    {({ loading, error, data }) => {
      if (error) {
        return <div>Error</div>
      }
      if (!data || loading) {
        return <Loading />;
      }
      return (
        <div className="columns">
          <div className="column is-one-quarter">
            <Profile login={data.viewer.login} name={data.viewer.name} avatar={data.viewer.avatarUrl} />
            <Status following={data.viewer.following.totalCount} gists={data.viewer.gists.totalCount} />
            <FollowerList followers={data.viewer.followers.nodes} />
            <OrganizationList organizations={data.viewer.organizations.nodes} />
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