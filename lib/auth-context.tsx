"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import type { User, UserRole } from "./types"
import { mockUsers } from "./mock-data"

interface AuthContextType {
  user: User | null
  login: (email: string, role: UserRole) => void
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = (email: string, role: UserRole) => {
    // Mock login - find user by email or create one
    const existingUser = mockUsers.find((u) => u.email === email)
    if (existingUser) {
      setUser(existingUser)
    } else {
      const newUser: User = {
        id: `user-${Date.now()}`,
        email,
        name: email.split("@")[0],
        role,
        createdAt: new Date(),
      }
      setUser(newUser)
    }
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}
