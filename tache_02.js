// En attente d'un appel
function wait(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function waitCall() {
  console.log("Appel à l'API en cours...");

  await wait(3000); // Simuler une attente de 3 secondes pour la réponse de l'API

  const data = fetch("https://jsonplaceholder.typicode.com/users/?_limit=3");
  data
    .then((response) => response.json())
    .then((response) => {
      console.log(JSON.stringify(response));
    })
    .catch((error) => {
      console.log("Erreur : " + error);
    });
}

waitCall();
