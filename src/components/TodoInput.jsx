export default function TodoInput({ Icon, height, width, useRef, onChange }) {
  return (
    <div
      style={{ height: height, width: width }}
      className="flex w-full border-2 text-gray-500 rounded border-purple  justify-between 
      items-center h-full px-4 shadow-md"
    >
      <input required type="text"
        ref={useRef} onChange={onChange}
        placeholder="Search note..."
        className={`w-full border-0 outline-0 h-full bg-transparent font-semibold`}
      />
      {Icon}
    </div>
  );
}
