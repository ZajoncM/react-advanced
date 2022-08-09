import { useRef } from "react";
import {
  useAddUserMutation,
  useGetUsersQuery,
  useRemoveUserMutation,
} from "./generated/graphql";

const Users = () => {
  const { loading, data } = useGetUsersQuery({
    variables: { name: true, lastName: false },
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const [createUser] = useAddUserMutation({
    refetchQueries: ["getUsers"],
  });
  const [removeUser] = useRemoveUserMutation({
    refetchQueries: ["getUsers"],
  });
  const addUser = () => {
    const name = nameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    if (!name || !lastName) return;

    createUser({ variables: { name, lastName } });
  };

  if (loading) return <div>loading...</div>;

  return (
    <div>
      <ul>
        {data?.allUsers?.map((user) => (
          <li
            key={user?.id}
            onClick={() => removeUser({ variables: { id: user?.id! } })}
          >
            {user?.name} {user?.lastName}
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
