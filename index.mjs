#!/usr/bin/env node

import { v4 as uuidv4 } from "uuid";

const id = uuidv4();
const windowConfiguration = {
  id,
  name: process.env.NAME,
  query: process.env.QUERY,
  windows: [
    {
      id: uuidv4(),
      start: Date.now(),
      end: Date.now() + parseInt(process.env.DURATION, 10),
    },
  ],
};

console.log(
  "Going to define a maintenance window:",
  JSON.stringify(windowConfiguration, null, 2)
);

await fetch(`${process.env.ORIGIN}/api/settings/maintenance/${id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Authorization: `apiToken ${process.env.API_TOKEN}`,
  },
  body: JSON.stringify(windowConfiguration),
});
