import { Result } from "@/store/ui/types";

const rowsByState = (tries: Result[]) => {
  const rows = tries.map((t, index) => ({
    id: index + 1,
    time: t.time,
    guess: t.guess,
    result: t.result,
  }));
  return rows;
};

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

export { rowsByState, getRandomNumber };
