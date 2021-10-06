import express from "express";
import { stripe } from "../../clients/stripe";

const router = express.Router();

router.post(
  "/munny/accounts/new.json",
  async (req: express.Request, res: express.Response) => {
    let account;
    try {
      account = await stripe.accounts.create({
        type: "standard",
      });
      console.log(`created account: ${JSON.stringify(account)}`);
    } catch (error) {
      console.error("failed creating account", JSON.stringify(error));
    }

    let accountLink;
    try {
      accountLink = await stripe.accountLinks.create({
        account: account.id,
        refresh_url: "http://localhost:3000/reauth",
        return_url: "http://localhost:3000/home",
        type: "account_onboarding",
      });

      console.log(`created account link: ${JSON.stringify(accountLink)}`);
    } catch (error) {
      console.error("failed creating account", JSON.stringify(error));
    }

    res.json({ success: true, account_link: accountLink });
  }
);

module.exports = router;
