import { useQuery } from "@tanstack/react-query";

export const useFetchMovies = () => {
  const apiKeyAuth = import.meta.env.VITE_API_KEY;
  const apiUrl =
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKeyAuth}`,
    },
  };

  return useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const response = await fetch(apiUrl, options);
      if (!response.ok) {
        throw new Error("Erro ai buscar filmes.");
      }

      const data = await response.json();
      console.log(response);
      console.log(data);
      return data;
    },
  });
};
