import useScreenShots from "../hooks/useScreenShots.ts";
import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenShots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenShots(gameId);

  if (isLoading) return <Spinner />;

  if (error || !data) throw error;

  const images = data?.results;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {images.map((s) => (
        <Image key={s.id} src={s.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
