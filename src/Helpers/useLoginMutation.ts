import * as React from "react";
import { CreateClientResponse, createClientVariables } from "../types";
import useMutation from "./useMutation";

const UseLoginQuery = () => {
  const { data, loading } = useMutation<
    CreateClientResponse,
    createClientVariables
  >("createClient", {
    email: "serkankaracasulu@gmail.com",
  });
  React.useEffect(() => {
    if (data) {
      console.log(data);
      localStorage.setItem("token", data.token);
    }
  }, [data]);
  return loading;
};
export default UseLoginQuery;
