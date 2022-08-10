import { useEffect } from "react";

type Props = {
  example?: number;
  test: () => void;
};

const UserTest = ({ example, test }: Props) => {
  useEffect(() => {
    test();
  }, [test]);
  return <div>{example}</div>;
};

export default UserTest;
