import { BiSolidEdit } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';
import { MdCheck } from 'react-icons/md';

const TodoList = ({ Notes, isCompleted, onclick, editTask, deleteTask }) => {
  return (
    <div className="w-full flex items-center gap-3 justify-between py-3 border-b border-purple">
      <div className="flex items-center gap-3 text-[1.3rem] font-semibold max-[530px]:gap-1.5">
        {/* check box */}
        <div
          onClick={onclick}
          className={`border-2 border-purple ${ !isCompleted ? 'bg-transparent' : 'bg-purple' } 
          text-white p-[2px] rounded-full w-[25px] flex items-center justify-center h-[25px] cursor-pointer max-[725px]:w-[20px] max-[725px]:h-[20px] max-[725px]:min-w-[20px] max-[725px]:min-h-[20px]`}
        >
          <MdCheck className={!isCompleted ? `hidden` : `inline`} />
        </div>
        {/* task/notes */}
        <h2 className={`${isCompleted && `text-gray-400 line-through`} 
        max-[725px]:text-[1rem] max-[530px]:max-w-full`}>{Notes}</h2>
        <span
          style={{
            background: isCompleted
              ? 'rgba(0,225,0,0.2)'
              : 'rgba(249,191,59,0.3)',
            color: isCompleted ? '#15803D' : '#C2410C',
          }}
          className="text-[0.74rem] font-[500] px-3 rounded-full py-[2px] max-[725px]:text-[0.5rem] max-[725px]:px-2 max-[725px]:py-[1px]"
        >
          {isCompleted ? 'Completed' : 'Pending'}
        </span>
      </div>
      <div className="flex items-center text-[1.3rem] gap-4 text-gray-500 max-[530px]:gap-1 max-[530px]:text-[1rem]">
        {/* edit task */}
        <BiSolidEdit
          onClick={editTask}
          className="w-[28px] h-[28px] bg-gray-200 rounded-full p-[5px] cursor-pointer ease-in-out duration-300 hover:bg-purple hover:text-white shadow-md max-[530px]:h-[25px] 
          max-[530px]:w-[25px]"
        />
        {/* delete task */}
        <MdDeleteForever
          onClick={deleteTask}
          className="w-[28px] h-[28px] bg-gray-200 rounded-full p-[5px] cursor-pointer ease-in-out duration-300 hover:bg-red-500 hover:text-white shadow-md max-[530px]:h-[25px] 
          max-[530px]:w-[25px]"
        />
      </div>
    </div>
  );
};

export default TodoList;
