const endpoint = 'https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart';

const readJoke = async () => {
  const read = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const response = read.json();
  return response;
};

export default readJoke;
