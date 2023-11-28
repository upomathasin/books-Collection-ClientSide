import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthContextProvider";
import { useQuery } from "@tanstack/react-query";

export default function useBooks() {
  const { user } = useContext(AuthContext);

  const { refetch, data: books = [] } = useQuery({
    queryKey: ["books"],
    queryFn: async () =>
      await fetch(`http://localhost:5000/books/${user.email}`).then((res) =>
        res.json()
      ),
  });
  return [books, refetch];
}
