const database={
  users: [
      {id: 1, name: "Usuario 1"},
      {id: 2, name: "Usuario 2"},
      {id: 3, name: "Usuario 3"}
  ],
};

export function getElementById(id) {
  return new Promise((resolve, reject) => {
      // Simulando una búsqueda en la base de datos
      setTimeout(() => {
          const user = database.users.find(user => user.id === id);

          if (user) {
              resolve(user);
          } else {
              reject("User not found");
          }
      }, 2000);
  });
}

export function getUserByName(name) {
  return new Promise((resolve, reject) => {
      // Simulando una búsqueda en la base de datos
      setTimeout(() => {
          const user = database.users.find(user => user.name === name);

          if (user) {
              resolve(user);
          } else {
              reject("User not found");
          }
      }, 2000);
  });
}

export function calculatePowPromise(numbers) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (numbers.length === 0) {
          reject("The length of the array is 0");
      } else {
          const result = numbers.map(num => num ** 2);
          resolve(result);
      }
    }, 2000);
  });
}