import axios from "axios";

const api_url = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

api_url.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const SignInService = async (data) => {
  try {
    const response = await api_url.post("/auth/login", data);

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Invalid Credential",
    };
  }
};

export const SignUpService = async (data) => {
  try {
    const response = await api_url.post("/auth/register", data);

    if (response.status === 201 || response.status === 200) {
      return { success: true, data: response.data };
    }
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message,
    };
  }
};
