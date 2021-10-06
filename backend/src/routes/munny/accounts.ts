import express from "express";
import Stripe from "stripe";
import { stripeClient } from "../../clients/stripe";

const router = express.Router();

// curl -XPOST localhost:3000/munny/accounts/new.json
router.post(
  "/munny/accounts/new.json",
  async (req: express.Request, res: express.Response) => {
    let account: Stripe.Response<Stripe.Account>;
    try {
      account = await stripeClient.accounts.create({
        type: "standard",
      });
      console.log(`created account: ${JSON.stringify(account)}`);
    } catch (error) {
      console.error("failed creating account", JSON.stringify(error));
      return res.json({ success: false, error: error});
    }

    let accountLink: Stripe.Response<Stripe.AccountLink>;
    try {
      accountLink = await stripeClient.accountLinks.create({
        account: account.id,
        refresh_url: "http://localhost:3000/reauth",
        return_url: "http://localhost:3000/home",
        type: "account_onboarding",
      });

      console.log(`created account link: ${JSON.stringify(accountLink)}`);
    } catch (error) {
      console.error("failed creating account", JSON.stringify(error));
      return res.json({ success: false, error: error});
    }

    res.json({ success: true, account_link: accountLink });
  }
);

module.exports = router;
