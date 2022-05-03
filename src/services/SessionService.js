const SESSION_ENDPOINT = 'https://626c988550a310b8a345c00a.mockapi.io/sessions';

const getFetchOptions = (method, data) => ({ 
  method: method, 
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
});

export const getSessions = async () => {
  try {
      const response = await fetch(SESSION_ENDPOINT);
      return await response.json();
  }
  catch(e) {
      console.log(e);
      return null;
  }
}

export const createSession = async (session) => {
  try {
      const response = await fetch(SESSION_ENDPOINT, getFetchOptions("POST", session))
      return await response.json();
  }
  catch(e) {
      console.log(e);
      return null;
  }
}

export const updateSession = async (session) => {
  try {
      const response = await fetch(SESSION_ENDPOINT + "/" + session.id, getFetchOptions("PUT", session));
      return response;
  }
  catch(e) {
      console.log(e);
      return null;
  }
}

export const deleteSession = async (session) => {
  try {
      const response = await fetch(SESSION_ENDPOINT + "/" + session.id, { method: "DELETE" })
      return response;
  }
  catch(e) {
      console.log(e);
      return null;
  }
}
