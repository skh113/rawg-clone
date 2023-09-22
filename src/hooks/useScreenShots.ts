import APIClient from "../services/api-client.ts";
import { useQuery } from "@tanstack/react-query";
import { ScreenShot } from "../entities/screenShot.ts";

const UseScreenShots = (gameId: number) => {
  const apiClient = new APIClient<ScreenShot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenShot", gameId],
    queryFn: apiClient.getAll,
  });
};

export default UseScreenShots;
