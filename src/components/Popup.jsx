import { useRef } from 'react';
import TodoInput from './TodoInput';

const Popup = ({ showPopup,setShowPopup,setAddAllTask,editMode,setEditMode,editTaskId, }) => {
  
  const inputRef = useRef();

  const addTodo = (task) => {
    setAddAllTask((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        task: task,
        isCompleted: false,
      },
    ]);
  };

  const editTask = (taskId, newTask) => {
    setAddAllTask((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, task: newTask } : task
      )
    );
  };
// handle/exicute the form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = inputRef.current.value;
    if (!editMode) addTodo(newTask);
    else editTask(editTaskId, newTask);
    inputRef.current.value = '';
    setEditMode(false);
  };

  return (
    <section
      style={{ display: showPopup ? 'flex' : 'none', }}
      className="flex items-center justify-center fixed w-screen h-screen bg-[rgba(0,0,0,0.5)] 
      top-0 left-0 bottom-0 right-0 z-[222222222]"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white w-[500px] h-[300px] flex flex-col justify-between rounded-[20px] 
        p-8 items-center shadow-lg max-[725px]:w-[400px] max-[725px]:h-[250px] max-[430px]:w-[350px] max-[430px]:p-5 max-[430px]:h-[200px]"
      >
        <div className="w-full flex flex-col gap-5 items-center max-[430px]:gap-1">
          <h1 className="font-semibold uppercase text-[1.5rem] drop-shadow-md">
            {!editMode ? "New Note" : "Edit Task"}
          </h1>
          <TodoInput useRef={inputRef} height={'45px'} placeholder={!editMode ? 'Add Task' : 'Edit Task'}/>
        </div>
        <div className="flex w-full items-center justify-between">
          <button
            onClick={() => setShowPopup(false)}
            className="font-[500] text-purple text-[1.1rem] border-2 border-purple px-8 py-1.5 
            rounded-[8px] shadow-md max-[725px]:text-[0.95rem]"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="font-[500] text-[1.1rem] border-2 border-purple bg-purple text-white 
            px-8 py-1.5 rounded-[8px] shadow-md max-[725px]:text-[0.95rem]"
          >
            Apply
          </button>
        </div>
      </form>
    </section>
  );
};

export default Popup;
