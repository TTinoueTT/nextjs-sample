import React from "react";

const TodoList = () => {
    return (
        <ul className="space-y-3 text-black">
            <li className="flex justify-between rounded border-l-4 border-blue-500 bg-white p-4 shadow">
                <span className="text-black">散歩</span>
                <div>
                    <button className="mr-3 text-green-400">Edit</button>
                    <button className="text-red-500">Delete</button>
                </div>
            </li>
            <li className="flex justify-between rounded border-l-4 border-blue-500 bg-white p-4 shadow">
                <span className="text-black">散歩</span>
                <div>
                    <button className="mr-3 text-green-400">Edit</button>
                    <button className="text-red-500">Delete</button>
                </div>
            </li>
            <li className="flex justify-between rounded border-l-4 border-blue-500 bg-white p-4 shadow">
                <span className="text-black">散歩</span>
                <div>
                    <button className="mr-3 text-green-400">Edit</button>
                    <button className="text-red-500">Delete</button>
                </div>
            </li>
        </ul>
    );
};

export default TodoList;
