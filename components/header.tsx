export const Header = ({
  label,
  hightlight,
}: {
  label: string;
  hightlight?: string;
}) => {
  return (
    <div className="w-full text-center">
      <h1 className="text-3xl font-semibold uppercase text-secondary mb-4">
        {label} <span className="text-dark-primary">{hightlight}</span>
      </h1>
      <hr />
    </div>
  );
};
