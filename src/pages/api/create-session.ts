import { NextApiRequest, NextApiResponse } from "next";
import sdk from "../../helpers/candypay";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const response = await sdk.session.create({
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
        // additional tokens you can pass, SOL and USDC are default
        tokens: ["bonk", "samo"],
        items: [
          {
            name: "Solana Shades",
            // price in USD
            price: 0.1,
            image: "https://imgur.com/M0l5SDh.png",
            quantity: 1,
            // optional product size parameter
            size: "9",
          },
        ],
        shipping_fees: 0.5,
      });

      res.status(200).json(response);
    } catch (error) {
      console.log(error);

      res.status(500).json({
        error: "Error creating session",
      });
    }
  } else {
    res.status(405).json({
      error: "Method not allowed",
    });
  }
};

export default handler;
