"use client";

import Book from "@/app/components/Book";

// 疑似データ
const books = [
    {
        id: 1,
        title: "Book 1",
        thumbnail: "/books/dogramagra.webp",
        price: 2980,
        author: {
            id: 1,
            name: "Author 1",
            description: "Author 1 description",
            profile_icon: "https://source.unsplash.com/random/2",
        },
        content: "Content 1",
        created_at: new Date().toString(),
        updated_at: new Date().toString(),
    },
    {
        id: 2,
        title: "Book 2",
        thumbnail: "/books/leviathan.webp",
        price: 1980,
        author: {
            id: 2,
            name: "Author 2",
            description: "Author 2 description",
            profile_icon: "https://source.unsplash.com/random/3",
        },
        content: "Content 2",
        created_at: new Date().toString(),
        updated_at: new Date().toString(),
    },
    {
        id: 3,
        title: "Book 3",
        price: 4980,
        thumbnail: "/books/pingpong.webp",
        author: {
            id: 3,
            name: "Author 3",
            description: "Author 3 description",
            profile_icon: "https://source.unsplash.com/random/4",
        },
        content: "Content 3",
        created_at: new Date().toString(),
        updated_at: new Date().toString(),
    },
    // 他の本のデータ...
];

// eslint-disable-next-line @next/next/no-async-client-component
export default function Home() {
    return (
        <>
            <main className="mt-20 flex flex-wrap items-center justify-center md:mt-32">
                <h2 className="mb-2 w-full text-center text-3xl font-bold">Book Commerce</h2>
                {books.map((book) => (
                    <Book key={book.id} book={book} />
                ))}
            </main>
        </>
    );
}
