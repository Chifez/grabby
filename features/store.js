import { create } from "zustand";
import { userSlice } from "./slice/userSlice";

export const useBoundedStore = create((...a) => ({
  ...userSlice(...a),
}));
