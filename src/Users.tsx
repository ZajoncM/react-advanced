import { useGetUserQuery, SubUserDocument } from "./generated/graphql";
import UserTest from "./UserTest";

const Users = () => {
  const { loading, data, refetch, subscribeToMore } = useGetUserQuery();

  const test = () =>
    subscribeToMore({
      document: SubUserDocument,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;

        return { ...prev, ...subscriptionData.data };
      },
    });

  if (loading) return <div>loading...</div>;

  return (
    <div>
      <UserTest example={data?.user.exampleField} test={test} />
      <button onClick={() => refetch()}>refetch</button>
    </div>
  );
};

export default Users;
