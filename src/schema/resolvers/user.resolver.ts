import { randomUUID } from "crypto";
import { users } from "../../data/users.js";

export const userResolvers = {
  Query: {
    getUsers: () => users,
  },

  Mutation: {
    createUser: (_: any, { user }: any) => {
      const newUser = { id: randomUUID(), ...user };
      users.push(newUser);
      return newUser;
    },

    updateUser: (_: any, { user, id }: any) => {
      const index = users.findIndex((u: any) => u.id === id);
      if (index === -1) throw new Error("Usuário não encontrado");

      users[index] = { ...users[index], ...user }; //Muda só o que ele mandou
      return users[index];
    },

    deleteUser: (_: any, { id }: any) => {
      const index = users.findIndex((u: any) => u.id === id);
      if (index === -1) throw new Error("Usuário não encontrado");

      users.splice(index, 1); // remove sem reatribuir a importação
      return "Usuário deletado";
    },
  },
};
