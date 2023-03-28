import { Link } from 'react-router-dom';

const ListItems = (probs) => {
  return (
    <li className="p-3 text-cyan-600 box hover:bg-cyan-600 hover:text-slate-100 rounded my-1 border-l-4 border-cyan-900">
      <Link to={probs.link}>
        <a className="flex items-center font-bold">
          <div className="mr-10 text-2xl">{probs?.icon}</div>
          <span>{probs.title}</span>
        </a>
      </Link>
    </li>
  );
};

export default ListItems;
