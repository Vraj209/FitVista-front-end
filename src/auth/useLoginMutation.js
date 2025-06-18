import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAuthStore } from "./useAuthStore";
import { useNavigate } from "react-router-dom";


export const useLoginMutation = () => {
const login = useAuthStore((state) => state.login)
   const navigate = useNavigate();
    
    return useMutation({
        mutationFn: async (data) =>{
            const res = await axios.post(
              "http://localhost:3000/api/v1/users/signin",
              data
            );
            return res.data
        },
        onSuccess:(data)=> {

            const user = data.data
            const token = data.token
           
            login(user,token)
            

            navigate("/");
        }
    })
}

export const useRegisterMutation = () => {
    return useMutation({
        mutationFn: async (data) => {
            const res = await axios.post(
              "http://localhost:3000/api/v1/users/signup",
              data
            );
            return res.data
        }
    })
}
