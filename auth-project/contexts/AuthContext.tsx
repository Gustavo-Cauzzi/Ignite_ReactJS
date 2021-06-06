import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Router from 'next/router';
import { api } from "../services/apiClient";
import { destroyCookie, parseCookies, setCookie } from "nookies";

type SignInCredentials = {
    email: string;
    password: string;
}

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  isAuthenticated: boolean;
  user: User;
}

type AuthProividerProps = {
  children: ReactNode;
}

interface User {
  email: string;
  permissions: string[];
  roles: string[];
}

export const AuthContext = createContext({} as AuthContextData);

let authChannel: BroadcastChannel;

export function signOut(){
  destroyCookie(undefined, 'nextauth.token');
  destroyCookie(undefined, 'nextauth.refreshToken');

  authChannel.postMessage('signOut')

  Router.push('/');
}

export function AuthProider({ children }: AuthProividerProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    authChannel = new BroadcastChannel('auth');

    authChannel.onmessage = (message => {
      switch (message.data) {
        case 'signOut':
          signOut()
          break;

        case 'signIn':
          Router.push('/dashboard')
          break;

        default:
          break;
      }
    })
  }, []);

  useEffect(() => {
    const { 'nextautht.token': token } = parseCookies();

    if (token) {
      api.get('/me')
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        signOut();
      })
    }
  }, []);

  async function signIn({ email, password }: SignInCredentials){
    try {
      const response = await api.post("sessions", {
        email,
        password,
      })

      const { permissions, roles, token, refreshToken } = response.data;

      setCookie(undefined, 'nextauth.token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      });

      setCookie(undefined, 'nextauth.refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      });

      setUser({
        email,
        permissions,
        roles
      });

      authChannel.postMessage('signIn');

      api.defaults.headers['Authorization'] = `Bearer ${token}`

      Router.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      signIn,
      signOut,
      user
    }}>
        {children}
    </AuthContext.Provider>
  )
}
