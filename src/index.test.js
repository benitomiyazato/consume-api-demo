const request = require("supertest");
const app = require("./index");

describe("GET /character/page/:pageNumber", () => {
  it("should get 200 OK response", async () => {
    const response = await request(app).get("/api/character/page/1");
    expect(response.statusCode).toEqual(200);
  });

  it("should map results into new objects", async () => {
    const response = await request(app).get("/api/character/page/1");
    const resultsFirstElement = response.body.results[0];
    expect(resultsFirstElement).toEqual({
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      origin: "Earth (C-137)",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      episodes: 51,
      created: "2017-11-04T18:48:46.250Z",
    });
  });

  it("should return the right page", async() => {
    const response = await request(app).get("/api/character/page/3");
    const firstElementId = response.body.results[0].id;
    const lastElementId = response.body.results.pop().id;
    
    expect(firstElementId).toEqual(41);
    expect(lastElementId).toEqual(60);
  })
});
