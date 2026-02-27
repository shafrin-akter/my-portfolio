import { createContext, useState, useEffect, useCallback } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../config/firebase';
import api from '../api/axios';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);       // { uid, name, email, role }
  const [loading, setLoading] = useState(true);  // Initial auth check

  // Listen to Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          // Fetch role from MongoDB via our backend
          const { data } = await api.get('/auth/me');
          setUser({
            uid: firebaseUser.uid,
            name: firebaseUser.displayName || data.user.name,
            email: firebaseUser.email,
            role: data.user.role,
          });
        } catch {
          // Backend might be down, set basic info
          setUser({
            uid: firebaseUser.uid,
            name: firebaseUser.displayName || firebaseUser.email.split('@')[0],
            email: firebaseUser.email,
            role: 'user',
          });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = useCallback(async (email, password) => {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    // Fetch role from backend
    const { data } = await api.get('/auth/me');
    const u = {
      uid: credential.user.uid,
      name: credential.user.displayName || data.user.name,
      email: credential.user.email,
      role: data.user.role,
    };
    setUser(u);
    return u;
  }, []);

  const register = useCallback(async (name, email, password) => {
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(credential.user, { displayName: name });
    // The authenticate middleware auto-creates a MongoDB user record
    const { data } = await api.get('/auth/me');
    const u = {
      uid: credential.user.uid,
      name,
      email: credential.user.email,
      role: data.user.role,
    };
    setUser(u);
    return u;
  }, []);

  const logout = useCallback(async () => {
    await signOut(auth);
    setUser(null);
  }, []);

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isAdmin: user?.role === 'admin',
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
