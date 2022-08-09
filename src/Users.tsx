import { useQuery, gql, useMutation } from "@apollo/client";
import { useRef } from "react";

type User = {
  id: number;
  name: string;
  lastName: string;
};

type GetUserType = {
  allUsers: User[];
};

const USER_FIELDS = gql`
  fragment UserFields on User {
    id
    firstName
    lastName
  }
`;

const GET_USERS = gql`
  query getUsers($name: Boolean!, $lastName: Boolean!) {
    allUsers {
      id
      name: firstName @include(if: $name)
      lastName @skip(if: $lastName)
    }
  }
`;

const ADD_USER = gql`
  ${USER_FIELDS}
  mutation addUser($name: String!, $lastName: String!) {
    createUser(firstName: $name, lastName: $lastName) {
      ...UserFields
    }
  }
`;

const REMOVE_USER = gql`
  ${USER_FIELDS}
  mutation addUser($id: ID!) {
    removeUser(id: $id) {
      ...UserFields
    }
  }
`;

const Users = () => {
  const { loading, data } = useQuery<GetUserType>(GET_USERS, {
    variables: { name: true, lastName: false },
    fetchPolicy: "network-only",
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const [createUser] = useMutation(ADD_USER, {
    refetchQueries: ["getUsers"],
  });
  const [removeUser] = useMutation(REMOVE_USER, {
    refetchQueries: ["getUsers"],
  });
  const addUser = () => {
    const name = nameRef.current?.value;

    const lastName = lastNameRef.current?.value;

    createUser({ variables: { name, lastName } });
  };

  if (loading) return <div>loading...</div>;

  return (
    <div>
      <ul>
        {data?.allUsers.map(({ id, name, lastName }) => (
          <li key={id} onClick={() => removeUser({ variables: { id } })}>
            {name} {lastName}
          </li>
        ))}
      </ul>
      <div>
        <input ref={nameRef} placeholder="name" />
        <input ref={lastNameRef} placeholder="lastname" />
        <button onClick={addUser}>add</button>
      </div>
    </div>
  );
};

export default Users;
