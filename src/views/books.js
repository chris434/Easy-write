import { GetUser } from "../providers/userProvider.js";

export function Books() {
  const { user } = GetUser();
  console.log(user);

  return <>{user ? <div className=""> </div> : <div>loading...</div>}</>;
}
