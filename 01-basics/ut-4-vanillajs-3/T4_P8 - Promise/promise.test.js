import { getElementById, getUserByName, calculatePowPromise } from "./promise";

describe("DataBase Promises - selectUserById", () => {
    it ("should gets user with id = 2",  async () => {
        const result = await getElementById(2);
        const expected = { id: 2, name: "Usuario 2" };
        expect(result).toEqual(expected);
    });
    it ("should gets User not found with id = 5", async () => {
        try {
            await getElementById(5);
            // If the promise does not reject, fail the test
            expect.fail("Promise should have rejected");
        } catch (error) {
            expect(error).toEqual("User not found");
        }
    });

});


describe("DataBase Promises - selectUserByName", () => {
    it ("should gets user with name = Usuario 3", async () => {
        const user = await getUserByName("Usuario 3");
        expect(user).toEqual({ id: 3, name: "Usuario 3" });
    });
    it ("should gets User not found with name = John", async () => {
        try {
            await getUserByName("John");
          } catch (error) {
            expect(error).toEqual("User not found");
          }
    });

});

describe("Calculate Pow Promise",() => {
    it ("should get [1, 4, 9, 16, 25] with [1, 2, 3, 4, 5]",  async() => {
        const result = await calculatePowPromise([1, 2, 3, 4, 5]);
        const expected = [1, 4, 9, 16, 25];
        expect(result).toEqual(expected);
    });
    it ("should get The length arrays is 0 with []",  async() => {
        try {
            await calculatePowPromise([]);
            expect.fail("Promise should have rejected");
        } catch (error) {
            expect(error).toEqual("The length of the array is 0");
        }
    });

});
