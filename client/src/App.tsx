import * as React from "react";

import { trpc } from "./trpc";

const App = () => {
  const fetchUser = async () => {
    const createUser = await trpc.user.createUser.mutate({
      name: "Free Guy",
    });
    console.log("createUser =>", createUser);
    const user = await trpc.user.getUserById.query("0");
    const users = await trpc.user.getUsers.query();

    console.log("user =>", user);
    console.log("users =>", users);
  };

  React.useEffect(() => {
    fetchUser();
  }, []);

  return <></>;
};

export default App;
