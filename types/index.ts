export interface Word {
  id: string;
  text: string;
  position: number;
  status: "pending" | "approved" | "rejected";
  authorEmail: string;
  authorCountry: string | null;
  createdAt: string;
  upvotes: number;
  downvotes: number;
}

export interface Token {
  id: string;
  email: string;
  token: string;
  expiresAt: string;
  used: boolean;
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  wordAdded: boolean;
  country: string | null;
  createdAt: string;
}

export interface Vote {
  id: string;
  wordId: string;
  voterEmail: string;
  vote: "up" | "down";
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
