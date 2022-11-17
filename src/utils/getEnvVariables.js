export const getEnvVariables = () => {
  return {
    VITE_PIZZERIA_API_URL: import.meta.env.VITE_PIZZERIA_API_URL,
    VITE_PIZZERIA_TOKEN: import.meta.env.VITE_PIZZERIA_TOKEN,
  };
};
