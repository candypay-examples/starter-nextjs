import { useRouter } from 'next/router';
import type { NextPage } from "next";

const Index: NextPage = () => {
  const router = useRouter()
  const createSession = async () => {
    const response = await fetch("/api/create-session", {
      method: "POST",
    });
    const data = await response.json();

    router.push(data.payment_url);
  };

  return (
    <div className="min-h-screen w-full bg-slate-100 flex items-center justify-center">
      <button
        className="w-36 font-body px-8 h-10 rounded-md bg-indigo-600 text-white text-[16px] hover:bg-indigo-700 grid place-items-center"
        onClick={createSession}>
        Checkout
      </button>
    </div>
  );
};

export default Index;
