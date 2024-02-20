const API_HOST = "localhost";
const API_PORT = 3000;

const API_URL = `http://${API_HOST}:${API_PORT}`;

export const getUsers = async () => {
  const users = await fetch(`${API_URL}/users`);
  return await users.json();
};

export const findUserById = async ({ id }) => {
  const user = await fetch(`${API_URL}/users/${id}`);
  return await user.json();
};

export const createNewUser = async (user) => {
  const uasdfser = await fetch(`${API_URL}/users`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return await uasdfser.json();
};

export const deleteExistingUser = async ({ id }) => {
  await fetch(`${API_URL}/users/${id}`, {
    method: "delete",
  });

  return "User deleted successfully!";
};
