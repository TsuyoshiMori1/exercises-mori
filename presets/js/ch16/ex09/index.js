import express from "express";
import path from "path";
import fs from "fs";
const app = express();

export function serve(rootDir, port) {
  app.listen(port, () => {
    console.log("Listening on port", port);
  });

  app.use("/test/mirror", (request, response) => {
    response.setHeader("Content-Type", "text/plain; charset=UTF-8");
    response.writeHead(200);
    response.write(
      `${request.method} ${request.originalUrl} HTTP/${request.httpVersion}\r\n`
    );

    let headers = request.rawHeaders;
    for (let i = 0; i < headers.length; i += 2) {
      response.write(`${headers[i]}: ${headers[i + l]}\r\n`);
    }
    response.write("\r\n");
    request.pipe(response);
  });

  app.use((request, response) => {
    const filename = path.join(rootDir, request.path);

    let type;
    switch (path.extname(filename)) {
      case ".html":
      case ".htm":
        type = "text/html";
        break;
      case ".js":
        type = "application/javascript";
        break;
      case ".png":
        type = "image/png";
        break;
      case ".txt":
        type = "text/plain";
        break;
      default:
        type = "application/octet-stream";
        break;
    }

    const stream = fs.createReadStream(filename);
    stream.once("readable", () => {
      response.setHeader("Content-Type", type);
      response.writeHead(200);
      stream.pipe(response);
    });

    stream.on("error", (err) => {
      response.setHeader("Content-Type", "text/plain; charset=UTF-8");
      response.writeHead(404);
      response.end(err.message);
    });
  });
}

serve(process.argv[2] || "tmp", parseInt(process.argv[3]) || 8000);
