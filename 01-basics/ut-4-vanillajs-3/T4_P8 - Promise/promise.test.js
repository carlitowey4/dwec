import * as desctructure from "./promise";

const database={
    users: [
        {id: 1, name: "Usuario 1"},
        {id: 2, name: "Usuario 2"},
        {id: 3, name: "Usuario 3"}
    ],
};

describe("DataBase Promises - selectUserById", () => {
    it ("should gets user with id = 2",  async () => {
        const result = await getElementById(2);
    const expected = { id: 2, name: "Usuario 2" };
    assert.deepEqual(result, expected);
    });
    it ("should gets User not found with id = 5", async () => {
        try {
            await getElementById(5);
            assert.fail("Promise should have rejected");
          } catch (error) {
            assert.equal(error, "User not found");
          }
    });

});


describe("DataBase Promises - selectUserByName", () => {
    it ("should gets user with name = Usuario 3", () => {

    });
    it ("should gets User not found with name = John", () => {

    });

});

describe("Calculate Pow Promise", () => {
    it ("should get [1, 4, 9, 16, 25] with [1, 2, 3, 4, 5]", () => {

    });
    it ("should get The length arrays is 0 with []", () => {

    });

});
