import useTrailers from "../hooks/useTrailers.ts";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const firstTrailer = data?.results[0];
  return firstTrailer ? (
    <video src={firstTrailer.data.max} poster={firstTrailer.preview} controls />
  ) : null;
};

export default GameTrailer;
