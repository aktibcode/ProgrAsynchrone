async function concurrentRequests() {
  try {
    const [result1, result2] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/?_limit=3"),
      fetch("https://jsonplaceholder.typicode.com/posts/?_limit=4"),
    ]);

    const data1 = await result1.json();
    const data2 = await result2.json();

    console.log("Résultats combinés :", data1, data2);
  } catch (error) {
    console.error("Une erreur s'est produite :", error);
  }
}

concurrentRequests();
