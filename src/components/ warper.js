export function Warper({ position, children, styles }) {
  const POSITIONS = {
    centerColumn: "flex-col items-center",
    centerScreen: "items-center justify-center h-screen",
  };
  return (
    <div className={`flex ${POSITIONS[position]} ${styles}`}> {children} </div>
  );
}
