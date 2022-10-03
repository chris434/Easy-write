export function Button({
  bgColor,
  textColor = "white",
  children,
  cb,
  styles = "",
}) {
  return (
    <button
      className={`p-3 text-xl bg-${bgColor} text-${textColor} ${styles}`}
      onClick={cb}>
      {children}
    </button>
  );
}
