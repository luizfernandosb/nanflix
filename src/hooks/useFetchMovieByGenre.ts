import { useQuery } from "@tanstack/react-query";
import { useFetchGenres } from "./useFetchGenres";

export const useFetchMovieByGenre = () => {
  let genreId;
  const apiKeyAuth = import.meta.env.VITE_API_KEY;
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`;
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
