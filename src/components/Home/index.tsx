import { useFetchMovies } from "../../hooks/useFetchMovies";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Button } from "../ui/button";
export const MoviesSection = () => {
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
    <section className="flex flex-col w-screen">
      <Swiper
        slidesPerView={10}
        spaceBetween={0}
        freeMode={true}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {movies.results.map((movie: any, index: number) => (
          <SwiperSlide key={index}>
            <div>
              <img
                src={`${imgUrl}${movie.poster_path}`}
                alt="poster"
                className="size-4"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex text-center items-center flex-col w-full gap-10">
        <h2 className="text-3xl font-bold">The Best Streaming Experience</h2>
        <p>
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </p>
        <Button variant="destructive"  className="w-40">Start Watching Now</Button>
      </div>
    </section>
  );
};
