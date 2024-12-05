import { Button } from "../ui/button";
import { MovieList } from "./MovieList";
export const MoviesSection = () => {
  return (
    <section className="flex flex-col w-screen">
      <MovieList />
      <div className="flex text-center items-center flex-col w-full gap-10">
        <h2 className="text-3xl font-bold">The Best Streaming Experience</h2>
        <p>
          Nan<strong>flix</strong> is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </p>
        <Button variant="destructive" className="w-40">
          Start Watching Now
        </Button>
      </div>
    </section>
  );
};
