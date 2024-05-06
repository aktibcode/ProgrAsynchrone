// Fonction asynchrone qui prend un tableau de valeurs
async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    // Enregistrer la valeur après 1 seconde
    await new Promise((resolve) =>
      setTimeout(() => {
        console.log(value);
        resolve();
      }, 1000)
    );
  }
}

// Exemple d'utilisation
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);
