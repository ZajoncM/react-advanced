export type UserType = {
  id: number;
  name: string;
};

const User = ({ name, id }: UserType) => {
  const date = new Date();

  return (
    <div>
      <h2>{name}</h2>
      <p>{date.toLocaleDateString()}</p>
    </div>
  );
};

export default User;
