import { useFetchMovies } from "../../hooks/useFetchMovies";
import { useFetchGenres } from "../../hooks/useFetchGenres";

export const MoviesAndShowsSection = () => {
  const { data: isGenres, isLoading, isError } = useFetchGenres();
  const { data: movies } = useFetchMovies();

  console.log(actionMovies);

  if (isLoading) {
    return <p>Carregando generos.</p>;
  }
  if (isError) {
    return <p>Erro ao carregado generos.</p>;
  }

  return (
    <section>
      <div>
        <h2>Our Genres</h2>
        <div>
          {isGenres.genres.map((genre, id: number) => (
            <h2 key={id}>{genre.name}</h2>
          ))}
        </div>
      </div>
    </section>
  );
};
