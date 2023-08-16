import { supabase } from '../../lib/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const userSlice = (set) => ({
  user: null,
  loading: false,
  error: '',
  loadUser: async (router) => {
    set({ loading: true, error: null });
    try {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        set({ user: JSON.parse(storedUser) });
        router.push('Home');
      }
    } catch (error) {
      console.error('Error loading user:', error.message);
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
  createUser: async (values, router) => {
    const { email, password } = values;
    set({ loading: true, error: '' });
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) {
        console.log(error);
        set({ error: error.message });
        return alert(error);
      } else {
        const user = data.user;
        set({ user });
        console.log(data, user);
        if (data) {
          await AsyncStorage.setItem('user', JSON.stringify(data.user));
        }
        return router.push('Auth/verify');
      }
    } catch (error) {
      set({ error: error.message });
      return alert(error.message);
    } finally {
      set({ loading: false });
    }
  },
  loginUser: async (values, router) => {
    const { email, password } = values;
    set({ loading: true, error: '' });
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) {
        console.log(error);
        set({ error: error.message });
        console.log(email, password);
        return alert(error);
      } else {
        const user = data.user;
        set({ user });
        console.log(data, user);
        await AsyncStorage.setItem('user', JSON.stringify(data.user));
        return router.push('Home');
      }
    } catch (error) {
      set({ error: error.message });
      return alert(error.message);
    } finally {
      set({ loading: false });
    }
  },

  logoutUser: async (router) => {
    set({ loading: true, error: '' });
    try {
      await supabase.auth.signOut();
      await AsyncStorage.removeItem('user');
      set({ user: null });
      return router.push('Auth');
    } catch (error) {
      set({ error: error.message });
      return alert(error.message);
    } finally {
      set({ loading: false });
    }
  },
});
