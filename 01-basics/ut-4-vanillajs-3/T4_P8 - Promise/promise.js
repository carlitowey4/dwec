
function getElementById(id) {
    return new Promise((resolve, reject) => {
      // Simulamos una conexión a la base de datos con un retraso de 2 segundos
      setTimeout(() => {
        const data = [
          { id: 1, name: "Usuario 1" },
          { id: 2, name: "Usuario 2" },
          { id: 3, name: "Usuario 3" },
        ];
  
        const element = data.find(item => item.id === id);
  
        if (element) {
          resolve(element);
        } else {
          reject("User not found");
        }
      }, 2000);
    });
  }