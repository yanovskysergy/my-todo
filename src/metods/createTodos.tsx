import { TodoItem } from "../types/types";

export default (count: number): TodoItem[] => {
  return Array.from({ length: count }, (v, k) => k).map((k) => {
    return {
      id: `${k}`,
      text: `Todo ${k + 1}`,
    };
  });
};
