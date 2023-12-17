import React from "react";

const AddTask = () => {
    return (
        <form className="mb-4 space-y-3">
            <input type="text" className="w-full rounded-lg border px-4 py-2 focus:border-blue-400 focus:outline-none" />
            <button className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:scale-95 hover:bg-blue-400">Add Task</button>
        </form>
    );
};

export default AddTask;
