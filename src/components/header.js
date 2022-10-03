export function Header({ user, setHeaderDropdown }) {
  return (
    <>
      <header className="bg-white p-3 flex justify-between items-center w-full border-b-2">
        <h1>Easy Wite</h1>
        <button
          onClick={() => {
            setHeaderDropdown((dropdown) => !dropdown);
          }}>
          <img className="w-8 rounded-full" src={user.photoURL} />
        </button>
      </header>
    </>
  );
}
