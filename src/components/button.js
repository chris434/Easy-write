export function Button({ bgColor, textColor = "white", children, cb }) {
  return (
    <button
      className={`p-3 text-xl bg-${bgColor} text-${textColor}`}
      onClick={cb}>
      {children}
    </button>
  );
}
