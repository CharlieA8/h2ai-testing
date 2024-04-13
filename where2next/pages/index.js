import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <main className="bg-pink-500 flex min-h-screen flex-col items-center justify-center">
        <h1 className="font-mono font-bold">Feeling Sick?</h1>
        <p className="pt-4">Lets fix that</p>
        <div className="flex flex-row gap-4">
          <button onClick={() => router.push('./form')} className="mt-4 bg-white px-4 py-2 rounded-lg text-black">ik whats wrong</button>
          <button onClick={() => router.push('./test')} className="mt-4 bg-white px-4 py-2 rounded-lg text-black">no clue lol</button>
        </div>
        <p1>for medical emergencies call 911</p1>
    </main>
  );
}
