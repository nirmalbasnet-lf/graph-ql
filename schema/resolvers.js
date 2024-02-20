import {
  createNewUser,
  deleteExistingUser,
  findUserById,
  getUsers,
} from "../db-query-fake.js";

export const resolvers = {
  Query: {
    users: async () => {
      const usersData = await getUsers();
      return usersData;
    },
    user: async (_, args) => {
      return await findUserById(args);
    },
  },
  User: {
    favouritePosts: () => {
      return [
        {
          userId: "1",
          id: "3",
          title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        },
        {
          userId: "1",
          id: "4",
          title: "eum et est occaecati",
          body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        },
      ];
    },
  },
  Mutation: {
    createUser: async (_parent, args) => {
      const newUser = args.input;
      return await createNewUser(newUser);
    },

    deleteUser: async (_parent, args) => {
      return await deleteExistingUser(args);
    },
  },
};
