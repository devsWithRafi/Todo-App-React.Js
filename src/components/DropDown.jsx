export default function DropDown({ setSelected, selectedList }) {
  return (
    <select
      onChange={setSelected}
      className="bg-purple text-white h-full rounded-[5px] 
    px-3 font-semibold uppercase outline-0 border-0 shadow-md max-[530px]:w-[100px] max-[430px]:text-[0.8rem] max-[430px]:px-2"
    >
      {selectedList.map((optn, index) => (
        <option key={index} className="bg-white font-semibold text-purple">
          {optn}
        </option>
      ))}
    </select>
  );
}
