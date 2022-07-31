import { gql } from "@apollo/client";

import { REPO_DETAILS } from "./fragments";

export const GET_QUERY = gql`
  query {
    repositories {
      edges {
        node {
          ...RepoDetails
        }
      }
    }
  }
  ${REPO_DETAILS}
`;