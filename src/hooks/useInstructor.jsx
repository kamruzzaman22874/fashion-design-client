import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const useInstructor =() =>{

    const { user } = useContext(AuthContext);
	const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
		queryKey: ['isInstructor', user?.email],
		enabled: !!user?.email && !!localStorage.getItem('access-token'),
		queryFn: async () => {
			if (user?.email) {
                const res = await fetch(`https://fashion-design-server-fombsp1yl-kamruzzaman22874.vercel.app/users/instructor/${user?.email}`,{
                    headers: {authorization: `bearer ${localStorage.getItem("access-token")}`}
                });
                const data =await res.json();
				return data;
			}
		},
	});
	return [isInstructor, isInstructorLoading];
}

export default useInstructor;