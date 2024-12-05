import { useQuery } from "@tanstack/react-query";

export const useFetchGenres = () => {
  const apiKeyAuth = import.meta.env.VITE_API_KEY;
  const apiUrl = "https://api.themoviedb.org/3/genre/movie/list?language=en-EN";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKeyAuth}`,
    },
  };

  return useQuery({
    queryKey: ["isGenres"],
    queryFn: async () => {
      const response = await fetch(apiUrl, options);
      if (!response.ok) {
        throw new Error("Erro ai buscar generos.");
      }

      const data = await response.json();

      return data;
    },
  });
};


