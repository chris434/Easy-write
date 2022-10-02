import { logOut } from "../auth/auth.js";
import { Button } from "./button.js";
export function Header({ user }) {
  return (
    <>
      {user ? (
        <header>
          <Button bgColor="red-500" cb={logOut}>
            logout
          </Button>
        </header>
      ) : null}
    </>
  );
}
