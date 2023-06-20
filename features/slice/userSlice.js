export const userSlice = (set) => ({
  user: false,
  createUser: () => set(() => ({ user: true })),
  login: () => set(() => ({ user: true })),
  logout: () => set(() => ({ user: false })),
});
