export const useCounter = () => useState<number>("counter", () => 0);
export const useGlobalError = () => useState<string>("globalError", () => "");
export const useGlobalMessage = () => useState<string>("globalMessage", () => "");
export const useAuth = () => useState<object>("auth", () => ({user:null}));
