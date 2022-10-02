import { GetUser } from "../providers/userProvider.js";

export function Books() {
  const { user } = GetUser();
  console.log(user);

  return <>{user ? <div> {user.displayName} </div> : <div>loading...</div>}</>;
}
