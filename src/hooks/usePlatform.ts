import usePlatforms from "./usePlatforms.ts";

const usePlatform = (id?: number) => {
  const { data } = usePlatforms();
  return data?.results.find((p) => p.id === id);
};

export default usePlatform;
