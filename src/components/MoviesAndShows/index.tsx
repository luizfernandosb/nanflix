import { useFetchGenres } from "../../hooks/useFetchGenres";

export const MoviesAndShowsSection = () => {
  const { data: isGenres, isLoading, isError } = useFetchGenres();

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
            <div key={id}>{genre.name}</div>
          ))}
        </div>
      </div>
    </section>
  );
};
