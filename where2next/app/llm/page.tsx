// llm.js

import { Navigation } from "../components/nav";
import { useParams } from 'next/navigation'; 

export default function LLM({ topic }: { topic: any }) {
    return (
        <div className="bg-pink-300">
            <div className="pb-20">
                <Navigation />
            </div>
            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
                <h1 className="text-3xl font-bold text-center">{topic}</h1>
            </div>
        </div>
    );
}
