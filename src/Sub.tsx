import { useSubUserSubscription } from "./generated/graphql";

const Sub = () => {
  const { data } = useSubUserSubscription();

  return <div>{data?.user.exampleField}</div>;
};

export default Sub;
