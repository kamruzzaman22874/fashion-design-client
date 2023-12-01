import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const useClasses = () => {
  const { user } = useContext(AuthContext)

  const { data: classes = [], refetch, isLoading: loading } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/instructorClass/${user?.email}`)
      return res.json();

    }

  })
  return [classes, refetch, loading]
}

export default useClasses;