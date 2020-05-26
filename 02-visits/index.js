const express = require("express");
const redis = require("redis");
const process = require("process");

const app = express();
const client = redis.createClient({
  // Without docker, the host would be in the form of protocol and adress, "https://my-redis-server.com"
  // Because of Docker, you can use the service name "redis-server"; Redis is *not* aware of Docker!
  host: "redis-server",
  port: 6379 // Default port used with Redis, not needed if outside Docker
});
client.set("visits", 0);

app.get("/", (req, res) => {
  //process.exit(0)
  client.get("visits", (err, visits) => {
    res.send("Number of visits " + visits);
    client.set("visits", parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log("listening on port 8081");
});
