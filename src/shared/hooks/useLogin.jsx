import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from "../../services";
import toast from "react-hot-toast";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const login = async (userName, password) => {
        setIsLoading(true);
        const response = await loginRequest({ userName, password });
        setIsLoading(false);

        if (response.error) {
            return toast.error(response.error?.response?.data || "Error trying to login, please try again");
        }

        const { userDetails } = response.data;

        localStorage.setItem('user', JSON.stringify(userDetails));

        navigate("/");

    }

    return {
        login,
        isLoading
    }
}