const GAME_ENDPOINT = 'https://626c988550a310b8a345c00a.mockapi.io/games';

const getFetchOptions = (method, data) => ({ 
  method: method, 
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
});

export const getGames = async () => {
  try {
      const response = await fetch(GAME_ENDPOINT);
      return await response.json();
  }
  catch(e) {
      console.log(e);
      return null;
  }
}

export const createGame = async (game) => {
  try {
      const response = await fetch(GAME_ENDPOINT, getFetchOptions("POST", game))
      return await response.json();
  }
  catch(e) {
      console.log(e);
      return null;
  }
}

export const updateGame = async (game) => {
  try {
      const response = await fetch(GAME_ENDPOINT + "/" + game.id, getFetchOptions("PUT", game));
      return response;
  }
  catch(e) {
      console.log(e);
      return null;
  }
}

export const deleteGame = async (game) => {
  try {
      const response = await fetch(GAME_ENDPOINT + "/" + game.id, { method: "DELETE" })
      return response;
  }
  catch(e) {
      console.log(e);
      return null;
  }
}
