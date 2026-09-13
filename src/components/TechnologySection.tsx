import TechnologyCard from './TechnologyCard';
import type { Technology } from '../types/technology';
import { toast } from 'react-toastify';
import StackSidebar from './StackSidebar';
import { use, useState } from 'react';

type TechnologyProps = {
  promiseData: Promise<Technology[]>;
};

const TechnologySection = ({ promiseData }: TechnologyProps) => {
  // Selected technologies
  const [stack, setStack] = useState<Technology[]>([]);
  const technologies = use(promiseData);

  const handleAddToStack = (technology: Technology): void => {
    // Check duplicate
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);

      return;
    }

    // Add technology
    setStack((previousStack) => [...previousStack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove One Technology
  const handleRemove = (id: string): void => {
    const removedItem = stack.find((item) => item.id === id);

    setStack((previousStack) => previousStack.filter((item) => item.id !== id));

    if (removedItem) {
      toast.info(`${removedItem.name} removed from your stack.`);
    }
  };

  // Remove All
  const handleRemoveAll = (): void => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info('All technologies removed from your stack.');
  };

  return (
    <div id="technologies" className="mx-auto max-w-7xl px-5 pb-20 pt-10 lg:px-6">
      {/* Section Heading */}
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
          Explore the{' '}
          <span className="bg-gradient-to-r from-brand-orange via-brand-pink to-brand-violet bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Technology Cards */}
      <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              onAdd={handleAddToStack}
              isAdded={stack.some((item) => item.id === technology.id)}
            />
          ))}
        </div>

        {/* Stack Sidebar */}
        <StackSidebar stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
      </div>
    </div>
  );
};

export default TechnologySection;
