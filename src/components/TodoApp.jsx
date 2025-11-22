import { GoSearch } from 'react-icons/go';
import { HiOutlinePlus } from 'react-icons/hi';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import DropDown from './DropDown';
import Popup from './Popup';
import { useState } from 'react';

const TodoApp = () => {
  const [showPopup, setShowPopup] = useState(false); // popup for getting new task
  const [allTask, setAllTask] = useState([]); // Store all todos task in this (array of object)
  const [editMode, setEditMode] = useState(false); // edit task
  const [editTaskId, setEditTaskId] = useState(null); // track the task id for edit

  const selectedList = ['all', 'completed', 'pending']; // for filtering
  const [selected, setSelected] = useState('all'); // default filter
  const [search, setSearch] = useState(''); // store the searched task
  // handle the completed task
  const handleComplete = (taskId) => {
    setAllTask((prevTask) =>
      prevTask.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };
  // handle the edit option for editing any task
  const handleEdit = (taskID) => {
    setShowPopup(true);
    setEditMode(true);
    setEditTaskId(taskID);
  };
  // handle the delete option for deleting any task
  const handleDelete = (taskId) => {
    const deleteTask = allTask.filter((task) => task.id !== taskId);
    setAllTask(deleteTask);
    console.log('Deleted task', deleteTask);
  };

  return (
    <section className="relative bg-white w-screen h-screen flex flex-col items-center justify-center p-10">
      <Popup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        addAllTask={allTask}
        setAddAllTask={setAllTask}
        editMode={editMode}
        setEditMode={setEditMode}
        editTaskId={editTaskId}
      />
      {/* Todo box */}
      <div
        className="w-[650px] h-[90vh] max-h-[800px] py-10 px-5 relative shadow-md rounded-[10px] overflow-hidden max-[725px]:w-[500px] max-[725px]:min-h-[90vh] max-[530px]:w-[95vw]"
        style={{ background: 'white' }}
      >
      <h1 className="text-[3rem] font-semibold drop-shadow-md text-center 
      max-[725px]:text-[2rem] mb-5 -mt-5">TODO LIST</h1>
        {/* Search feild */}
        <div className="w-full flex items-center justify-between px-4 gap-5  h-[50px] max-[725px]:h-[40px] max-[725px]:gap-2 max-[430px]:px-0">
          <TodoInput
            onChange={(e) => setSearch(e.target.value)}
            Icon={<GoSearch size={23} className="text-purple" />}
          />
          <DropDown
            selectedList={selectedList}
            setSelected={(e) => setSelected(e.target.value)}
          />
        </div>
        {/* todo lists */}
        <div className="w-full max-h-full flex flex-col px-5 mt-5 overflow-y-auto py-5 pb-[10rem] max-[530px]:px-1">
          {allTask.map((todo) => {
            // filtering
            if (!todo.task.toLowerCase().includes(search.toLowerCase()))
              return null;
            const isHidden =
              (selected === 'completed' && !todo.isCompleted) ||
              (selected === 'pending' && todo.isCompleted);
            if (isHidden) return null;
            // returning the todos task reuseable component
            return (
              <TodoList
                onclick={() => handleComplete(todo.id)}
                key={todo.id}
                Notes={
                  todo.task.length > 35
                    ? todo.task.slice(0, 35) + '...'
                    : todo.task
                }
                isCompleted={todo.isCompleted}
                editTask={() => handleEdit(todo.id)}
                deleteTask={() => handleDelete(todo.id)}
              />
            );
          })}
        </div>
        {/* add new task button */}
        <div
          onClick={() => setShowPopup((prev) => !prev)}
          className="absolute bottom-5 right-5 bg-purple items-center justify-between h-[50px] rounded-full 
              p-2.5 text-white shadow-md cursor-pointer hover:scale-[1.05] hover:shadow-xl 
              duration-300 ease-in-out flex gap-1 px-5 font-semibold max-[725px]:w-[50px] max-[725px]:h-[50px]"
        >
          <p className='max-[725px]:hidden'>Add New Task</p>
          <HiOutlinePlus size={20} 
          className='max-[725px]:scale-[2.2]'/>
        </div>
      </div>
    </section>
  );
};
export default TodoApp;
