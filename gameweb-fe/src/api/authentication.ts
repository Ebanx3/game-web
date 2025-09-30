const SERVER_URL = import.meta.env.VITE_SERVER_URL + "/api";

export const Login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  try {
    const data = await fetch(`${SERVER_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    console.log(data)
    const json = await data.json();
    console.log(json)
    return json;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const Register = async ({
  username,
  password,
  email,
}: {
  username: string;
  password: string;
  email: string;
}) => {
  try {
    const data = await fetch(`${SERVER_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, email }),
    });
    const json = await data.json();
    return json;
  } catch (error) {
    console.log(error);
    return null;
  }
};
