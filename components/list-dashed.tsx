export const ListDashed = ({ list }: { list: any[] }) => {
  return (
    <ul className="ml-4 list-disc leading-8">
      {list.map((item, index) => (
        <li key={index} className="border-b pb-1 my-2 border-dashed">
          {typeof item === 'string' ? item : item()}
        </li>
      ))}
    </ul>
  );
};
