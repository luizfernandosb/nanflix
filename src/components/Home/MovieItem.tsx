type MovieItemProps = {
  src: string;
};

export const MovieItem = (props: MovieItemProps) => {
  return (
    <div>
      <img src={props.src} alt="poster" className="size-4" />
    </div>
  );
};

