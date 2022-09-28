export const useCounter = () => useState<number>("counter", () => 0);
export const useError = () => useState<string>("error", () => "pink");
