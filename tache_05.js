async function fetchApiData(url) {
  const response = await fetch(url);
  return await response.json();
}

async function parallelCalls(urls) {
  try {
    const promises = urls.map((url) => fetchApiData(url));
    const responses = await Promise.all(promises);

    responses.forEach((data, index) => {
      console.log(`Données récupérées de ${urls[index]} :`, data);
    });

    // Autre traitement avec les données recueillies
  } catch (error) {
    console.error("Une erreur s'est produite :", error);
  }
}

const urls = [
  "https://jsonplaceholder.typicode.com/users/?_limit=3",
  "https://jsonplaceholder.typicode.com/posts/?_limit=4",
  "https://jsonplaceholder.typicode.com/comments/?_limit=4",
];

parallelCalls(urls);
