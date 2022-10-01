export function Button({ bgColor, textColor = "white", children }) {
  return (
    <button className={`p-3 text-xl bg-${bgColor} text-${textColor}`}>
      {children}
    </button>
  );
}
