const PLAYER_ENDPOINT = 'https://626c988550a310b8a345c00a.mockapi.io/players';

const getFetchOptions = (method, data) => ({ 
  method: method, 
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
});

export const getPlayers = async () => {
  try {
      const response = await fetch(PLAYER_ENDPOINT);
      return await response.json();
  }
  catch(e) {
      console.log(e);
      return null;
  }
}

export const createPlayer = async (player) => {
  try {
      const response = await fetch(PLAYER_ENDPOINT, getFetchOptions("POST", player))
      return await response.json();
  }
  catch(e) {
      console.log(e);
      return null;
  }
}

export const updatePlayer = async (player) => {
  try {
      const response = await fetch(PLAYER_ENDPOINT + "/" + player.id, getFetchOptions("PUT", player));
      return response;
  }
  catch(e) {
      console.log(e);
      return null;
  }
}

export const deletePlayer = async (player) => {
  try {
      const response = await fetch(PLAYER_ENDPOINT + "/" + player.id, { method: "DELETE" })
      return response;
  }
  catch(e) {
      console.log(e);
      return null;
  }
}
