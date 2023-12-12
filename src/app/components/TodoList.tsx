import React from "react";

const TodoList = () => {
    return (
        <ul className="space-y-3 text-black">
            <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
                <span className="text-black">散歩</span>
                <div>
                    <button className="text-green-400 mr-3">Edit</button>
                    <button className="text-red-500">Delete</button>
                </div>
            </li>
            <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
                <span className="text-black">散歩</span>
                <div>
                    <button className="text-green-400 mr-3">Edit</button>
                    <button className="text-red-500">Delete</button>
                </div>
            </li>
            <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
                <span className="text-black">散歩</span>
                <div>
                    <button className="text-green-400 mr-3">Edit</button>
                    <button className="text-red-500">Delete</button>
                </div>
            </li>
        </ul>
    );
};

export default TodoList;
