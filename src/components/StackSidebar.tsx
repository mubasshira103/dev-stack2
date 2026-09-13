import type { Technology } from '../types/technology';

type StackSidebarProps = {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const StackSidebar = ({ stack, onRemove, onRemoveAll }: StackSidebarProps) => {
  return (
    <aside className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      {/* Heading */}
      <div>
        <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>

        <p className="mt-1 text-xs text-gray-400">
          {stack.length} {stack.length === 1 ? 'Technology' : 'Technologies'} Selected
        </p>
      </div>

      {/* Empty */}
      {stack.length === 0 ? (
        <div className="mt-5 flex min-h-[150px] flex-col items-center justify-center rounded-xl border border-dashed border-gray-200 text-center">
          <p className="text-xs text-gray-400">Your stack is empty.</p>

          <span className="mt-1 text-[10px] text-gray-300">Add technologies from the list.</span>
        </div>
      ) : (
        <>
          {/* Stack Items */}
          <div className="mt-5 flex flex-col gap-3">
            {stack.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 rounded-lg border border-gray-100 p-3"
              >
                <img src={item.icon} alt={item.name} className="h-7 w-7 object-contain" />

                <div className="min-w-0">
                  <h4 className="truncate text-xs font-semibold text-gray-800">{item.name}</h4>

                  <p className="mt-0.5 text-[10px] text-gray-400">{item.category}</p>
                </div>

                <button
                  onClick={() => onRemove(item.id)}
                  className="ml-auto text-xl leading-none text-gray-300 transition hover:text-red-500"
                  // aria-label={`Remove ${item.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Remove All */}
          <button
            onClick={onRemoveAll}
            className="mt-4 w-full rounded-lg border border-red-200 bg-white py-2.5 text-xs font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default StackSidebar;
