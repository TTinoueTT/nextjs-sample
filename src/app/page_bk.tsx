import Image from "next/image";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { getAllTodos } from "@/api";
import { log } from "console";

export default async function Home() {
    // const todos = await getAllTodos();
    // console.log(todos);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-200 py-2">
            <h1 className="-mt-32 text-4xl font-bold text-gray-700">Nextjs 13 Todo App</h1>
            <div className="mt-5 w-full max-w-xl">
                <div className="w-full rounded-lg bg-white px-8 py-6 shadow-md">
                    <AddTask />
                    <TodoList />
                </div>
            </div>
        </main>
    );
}
