// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { urlFor } from "../../sanity";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-08-01",
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const items: Product[] = req.body.items;

    //this is the way in wich stripe expects the data
    //https://stripe.com/docs/api/subscription_items/create
    const transformedItems = items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          image: [urlFor(item.image[0]).url()],
        },
        unity_amount: item.price * 100,
      },
      quantity: 1,
    }));

    try {
      //create checkout from params
      //https://stripe.com/docs/api/payment_methods/create
      const params: Stripe.Checkout.SessionCreateParams = {
        payment_method_types: ["card"],
        line_items: transformedItems,
        payment_intent_data: {},
        mode: "payment",
        success_url: `${req.headers.origin}/succes?session_id={CHECKOUT_SESSION_ID}`, //this comes from checkout
        cancel_url: `${req.headers.origin}/checkout`,
        metadata: {
          images: JSON.stringify(items.map((item) => item.image[0].asset.url)),
        },
      };
    } catch (error) {}
  }
}
