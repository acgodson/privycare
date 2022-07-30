import express, { json, urlencoded } from "express";

import { PrivyClient } from "@privy-io/privy-node";

const PRIVY_API_KEY = "ONwmWknQpvZfHd5Wbr7-Nc2DXkxLqydRBjz-xs_lNxk=";
const PRIVY_API_SECRET = "f1NHiY4kitM8lSf9xSayDfvNnGQl01oGQ5EUP1SEbr0=";

const client = new PrivyClient(PRIVY_API_KEY, PRIVY_API_SECRET);

const router = express.Router();


//Fetching healthcare Providers
router.get("/", async function (req, res, next) {
  let batchData = await client.getBatch(["title"], {
    limit: 5,
  });

  const list = batchData.users
    .filter((x) => x.data[0] !== null)
    .map((x) => x.user_id);
  console.log(list);
  res.send(list);
});

//Sending Emails
router.post("/send-email", async function (req, res) {
  //Get list of email
  const userID = req.body.user_id;
  const message = req.body.message;

  // console.log(userID[0]);

  try {

  for (let index = 0; index < userID.length; ++index) {
    const element = userID[index];

    console.log(element);

    client.sendEmail(userID, "Next Appointment", message);
  }

    return res.send({ Status: "Success", Details: "email sent" });
  } catch (err) {
    const response = { Status: "Failure", Details: err.message };
    return res.status(400).send(response);
  }
});

export default router;
