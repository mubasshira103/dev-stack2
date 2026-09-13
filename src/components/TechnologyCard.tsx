import type { Technology } from '../types/technology';

type TechnologyCardProps = {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
};

const TechnologyCard = ({ technology, onAdd, isAdded }: TechnologyCardProps) => {
  return (
    <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Top */}
      <div className="flex items-center justify-between">
        <img src={technology.icon} alt={technology.name} className="h-9 w-9 object-contain" />

        <span className="rounded-full bg-sky-50 px-3 py-1.5 text-[10px] font-semibold text-sky-500">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-5 text-lg font-bold text-gray-900">{technology.name}</h3>

      {/* Description */}
      <p className="mt-2 min-h-[60px] text-xs leading-5 text-gray-500">{technology.description}</p>

      {/* Information */}
      <div className="mt-5 flex items-center justify-between gap-2">
        <span className="rounded-md bg-gray-50 px-2 py-1.5 text-[10px] text-gray-500">
          {technology.category}
        </span>

        <span className="text-center text-[10px] text-gray-400">{technology.difficulty}</span>

        <span className="whitespace-nowrap text-[10px] font-semibold text-yellow-500">
          ★ {technology.rating}
        </span>
      </div>

      {/* Add Button */}
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-lg py-3 text-xs font-semibold transition ${
          isAdded
            ? 'cursor-not-allowed bg-gray-100 text-gray-500'
            : 'bg-slate-950 text-white hover:bg-slate-800'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
};

export default TechnologyCard;
