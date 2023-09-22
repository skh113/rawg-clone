import APIClient from "../services/api-client.ts";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Game from "../entities/game.ts";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms("24h"),
  });
export default useGame;
