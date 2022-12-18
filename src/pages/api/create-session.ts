import { CandyPay } from "@candypay/checkout-sdk";
import { NextApiRequest, NextApiResponse } from "next";

const sdk = new CandyPay({
  api_key: process.env.CANDYPAY_PRIVATE_API_KEY!,
  network: "mainnet",
  config: {
    collect_shipping_address: false,
  },
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const response = await sdk.session.create({
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
        tokens: ["dust", "samo", "shdw"], // SOL and USDC are default tokens and rest whitelisted tokens are optional to add and remove
        items: [
          {
            name: "Elon's Tweet folder",
            price: 0.01, // value must be in $USD
            image:
              "https://res.cloudinary.com/ddum5vpp3/image/upload/v1665883691/unknown_14_azezsk.png",
            quantity: 1,
            size: "small", // optional param 
          },
        ],
        // value must be in $USD | optional param  shipping_fees: 0.5,
      });

      res.status(200).json(response);
    } catch (error) {
      console.log(error);

      res.status(200).json({
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
