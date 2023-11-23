import consumers from "node:stream/consumers";
import http from "node:http";

const server = http.createServer(async (req, res) => {
  const { pathname } = new URL(req.url, "http://x");
  if (pathname.endsWith("/cmd")) {
    const body = await consumers.text(req);
    res.end(JSON.stringify({ body }));
  } else {
    res.end(JSON.stringify({
      batteryPercentage: 0,
      batteryVoltage: 0,
      position: 0,
      CHSesame2Status: "unlocked",
      timestamp: 0,
    }))
  }
});

server.listen(9999, () => {
  console.log("Listening on :9999");
});
