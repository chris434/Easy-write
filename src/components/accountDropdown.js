import { logOut } from "../auth/auth.js";
import { Button } from "./button.js";
export function AccountDropdown({ user, headerDropdown, setHeaderDropdown }) {
  return (
    <div
      className={`${
        headerDropdown
          ? "absolute top-0 right-0 p-3 bg-white shadow-xl m-all"
          : "hidden"
      }`}>
      <div>{user.displayName}</div>
      <Button
        bgColor="red-500"
        fo
        cb={() => {
          setHeaderDropdown(false);
          logOut();
        }}
        styles="w-full">
        logout
      </Button>
    </div>
  );
}
