const http = require("http");

const mockData = [
  {
    id: 1,
    text: "Todo One",
  },
  {
    id: 2,
    text: "Todo Two",
  },
  {
    id: 3,
    text: "Todo Three",
  },
];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("X-Powered-By", "Node.js");
  //   res.write("<h1>Hello World</h1>");
  //   res.write("<h1>Hello World</h1>");
  console.log("hello world");
  res.end(
    JSON.stringify({
      success: true,
      data: mockData,
    })
  );
});

server.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
