exports.seed = async function (knex) {
  await knex("users").insert([
    {
      username: "ajmatson",
      password: "W3lcom3",
      department: "Information Technology",
    },
    {
      username: "Aaron_matson",
      password: "g00dB0y23",
      department: "Human Resources",
    },
    {
      username: "matsonaaron1",
      password: "T3stings",
      department: "Custodial",
    },
  ]);
};