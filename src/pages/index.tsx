import { useRouter } from "next/router";
import type { NextPage } from "next";

import styles from "../styles/Home.module.css";
import { useState } from "react";

const Index: NextPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const createSession = async () => {
    setIsLoading(true);
    const response = await fetch("/api/create-session", {
      method: "POST",
    });
    const data = await response.json();

    router.push(data.payment_url);
    setIsLoading(false);
  };

  return (
    <main className={styles.main}>
      <button
        className={styles.button}
        onClick={createSession}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Checkout"}
      </button>
    </main>
  );
};

export default Index;
