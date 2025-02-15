import request from "supertest";
import { serve } from "./index.js";

describe("Express Server Tests", () => {
  let server;

  beforeAll((done) => {
    server = serve();
    server.listen(8000, () => {
      done();
    });
  });

  afterAll((done) => {
    server.close(done);
  });

  test("GET /test/mirror", async () => {
    const response = await request(server)
      .get("/test/mirror")
      .set("Accept", "text/plain");

    expect(response.status).toBe(200);
    expect(response.text).toMatch(/GET \/test\/mirror HTTP/);
  });

  test("GET /index.html", async () => {
    const response = await request(server).get("/index.html");

    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toContain("text/html");
  });
});
