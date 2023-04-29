import type { NextPage } from "next";

const Cancel: NextPage = () => {
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
      <h1>
        Forgot to add something to your cart? Shop around then come back to pay!
      </h1>
    </div>
  );
};

export default Cancel;
