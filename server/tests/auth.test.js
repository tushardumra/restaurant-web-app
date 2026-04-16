require("dotenv").config();
const request = require("supertest");
const app = require("../src/app");
const mongoose = require("mongoose");

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_DB_URI);
});

// beforeEach(async () => {
//   await mongoose.connection.collection("users").deleteMany({});
// });

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Auth API", () => {

  // test("Register user successfully", async () => {
  //   const res = await request(app)
  //     .post("/api/auth/register")
  //     .send({
  //       username: "TestUser",
  //       email: `test${Date.now()}@gmail.com`,
  //       password: "Test@123",
  //     });

  //   console.log(res.body);
  //   expect(res.statusCode).toBe(201);
  // });

  // test("Login user successfully", async () => {
  //   const userData = {
  //     username: "TestUser",
  //     email: `test${Date.now()}@gmail.com`,
  //     password: "Test@123",
  //   };

  //   await request(app).post("/api/auth/register").send(userData);

  //   const res = await request(app)
  //     .post("/api/auth/login")
  //     .send({
  //       identifier: userData.email,
  //       password: userData.password,
  //     });

  //   console.log(res.body);

  //   expect(res.statusCode).toBe(200);
  //   expect(res.body).toHaveProperty("token");
  // });

  // test("Login fails with wrong password", async () => {
  //   const userData = {
  //     username: "FailUser",
  //     email: `fail${Date.now()}@gmail.com`,
  //     password: "Strong@123",
  //   };

  //   await request(app).post("/api/auth/register").send(userData);

  //   const res = await request(app)
  //     .post("/api/auth/login")
  //     .send({
  //       identifier: userData.email,
  //       password: "Wrong@123",
  //     });

  //   expect(res.statusCode).toBe(401);
  // });

  // test("Access protected route without token should fail", async () => {
  // const res = await request(app).post("/api/orders").send({
  //   items: [],
  // });

  // expect(res.statusCode).toBe(401);
  // });

  test("Access protected route with token should succeed", async () => {
  const userData = {
    username: "ProtectedUser",
    email: `protected${Date.now()}@gmail.com`,
    password: "Strong@123",
  };

  // Step 1: Register
  await request(app).post("/api/auth/register").send(userData);

  // Step 2: Login
  const loginRes = await request(app)
    .post("/api/auth/login")
    .send({
      identifier: userData.email,
      password: userData.password,
    });

  // const cookies = loginRes.headers["set-cookie"];

  // console.log("COOKIES:", cookies);

  const token = loginRes.body.token;

  console.log("TOKEN:", token);

  // Step 3: Access protected route
  const res = await request(app)
    .post("/api/orders")
    .set("Authorization", `Bearer ${token}`)
    .send({
      items: [
        {
          food: "dummyFoodId",
          quantity: 2,
        },
      ],
    });

  console.log(res.body);

  expect(res.statusCode).not.toBe(401);
});

});