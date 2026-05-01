import { useContext } from "react";
import { UserContext } from "../context/usercontext/UserContext";



export const useUser = ()=> useContext(UserContext)