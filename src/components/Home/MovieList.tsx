// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import { MovieItem } from "./MovieItem";

export const MovieList = () => {
  const { data: movies, isLoading, isError } = useFetchMovies();
  const imgUrl = `https://image.tmdb.org/t/p/w500`;
  console.log(movies);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (isError) {
    return <p>Erro ao carregar filmes.</p>;
  }
  return (
    <Swiper
      slidesPerView={10}
      spaceBetween={0}
      freeMode={true}
      loop={true}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      {movies.results.map((movie: any, index: number) => (
        <SwiperSlide key={index}>
          <MovieItem src={`${imgUrl}${movie.poster_path}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
