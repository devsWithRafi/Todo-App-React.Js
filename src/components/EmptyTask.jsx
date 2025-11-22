import addTaskImg from '../assets/addTask1.png';

const EmptyTask = () => {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center absolute p-40 bg-transparent 
          opacity-[0.7] z-10 top-0 left-0 pointer-events-none select-none max-[725px]:p-20 max-[450px]:p-10"
    >
      <img src={addTaskImg} className="w-full" />
      <p className="font-semibold text-gray-600 text-center">
        There are currently no tasks available.
      </p>
    </div>
  );
};

export default EmptyTask;
