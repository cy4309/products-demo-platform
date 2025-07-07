type IRouter = {
  index: string;
  home: string;
  refs: string;
  error: string;
};

export const router_path: IRouter = {
  index: "/",
  home: "/home",
  refs: "/refs",
  error: "*",
};
