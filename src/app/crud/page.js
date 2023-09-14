import { React } from "react";

const Card = () => {
  const handleAddName = () => {
    console.log("handle is clicked");
  };
  return (
    <div className="h-screen bg-white flex flex-col justify-center items-center">
      <h1 className="text-black text-5xl">I am card</h1>
      <form>
        <div className="border-2 border-black bg-slate-400 flex flex-col p-1 rounded-sm">
          <label className="text-black text-xl">Name</label>
          <input placeholder="enter name " className="p-1 text-black" />
          <button
            className="border-2 border-black p-1 text-black"
            onClick={handleAddName}
          >
            Add name
          </button>
        </div>
      </form>
    </div>
  );
};

export default Card;
