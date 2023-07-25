import { Client } from "@master-chief/alpaca-ts";
import credentials from "./.credentials.json" assert { type: "json" };

const client = new Client({
  credentials,
  paper: true,
});

const account = await client.account.getAccount();

console.log(account);

const bars = await client.crypto.getBarsForSymbol({
  symbol: "ETH/USD",
  start: "2023-07-22",
  end: "2023-07-23",
  timeframe: "1Min",
});

console.log(bars);
