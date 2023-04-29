import type { NextPage } from "next";

const Success: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1>Your payment is successful!</h1>
    </div>
  );
};

export default Success;
