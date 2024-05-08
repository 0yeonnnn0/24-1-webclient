export function PageName({ PageName, secondName }) {
  return (
    <div className="pb-4 mb-2 border-b-2 min-w-full">
      <span className="text-3xl font-bold">{PageName}</span>
      <span className="text-3xl font-semibold">{secondName}</span>
    </div>
  );
}
