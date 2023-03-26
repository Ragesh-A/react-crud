const ListItems = (probs) => {
  return (
    <li className="p-3 text-cyan-600 box hover:bg-cyan-600 hover:text-slate-100 rounded my-1 border-l-4 border-cyan-900">
      <a href="" className="flex items-center font-bold">
        <div className="mr-10 text-2xl">{probs?.icon}</div>
        <span>{probs.title}</span>
      </a>
    </li>
  );
};

export default ListItems;
