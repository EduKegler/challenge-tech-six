import gql from 'graphql-tag';

export const GET_CURRENT_USER =
    gql`
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
    organizations(first: 5) {
      nodes {
        avatarUrl
        name
        login
      }
    }
    repositories(first: 5) {
      nodes {
        name
      }
    }
  }
}
`;