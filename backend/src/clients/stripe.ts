import Stripe from "stripe";

if(!process.env.STRIPE_SECRET_KEY){
  throw Error('missing STRIPE_SECRET_KEY env variable.');
}

export const stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-08-27",
});
