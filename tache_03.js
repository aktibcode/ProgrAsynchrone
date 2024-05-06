/*--------------
       
Gestion des erreurs avec Async/Await

---------------*/

function wait(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function waitCall() {
  console.log("Appel à l'API en cours...");

  try {
    await wait(3000); // Simuler une attente de 3 secondes pour la réponse de l'API
    // const data = "Données récupérées de l'API";
    // console.log("Données récupérées :", data);
    const data = fetch("https://jsonplaceholder.typicode.com/users/?_limit=3");
    data
      .then((response) => response.json())
      .then((response) => {
        console.log(JSON.stringify(response));
      });
    // Simuler un échec de l'appel à l'API
    throw new Error("Erreur lors de la récupération des données de l'API");
  } catch (error) {
    console.error("Une erreur s'est produite :", error.message);
  }
}

waitCall();

/*--------------
       
Chainage Async/Await

---------------*/

function wait(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function asyncFunction1() {
  await wait(1000);
  console.log("Fonction asynchrone 1 terminée");
}

async function asyncFunction2() {
  await wait(1000);
  console.log("Fonction asynchrone 2 terminée");
}

async function asyncFunction3() {
  await wait(1000);
  console.log("Fonction asynchrone 3 terminée");
}

async function chainedAsyncFunction() {
  console.log("Début de la chaîne d'appels asynchrones");

  await asyncFunction1();
  await asyncFunction2();
  await asyncFunction3();

  console.log("Fin de la chaîne d'appels asynchrones");
}

chainedAsyncFunction();
