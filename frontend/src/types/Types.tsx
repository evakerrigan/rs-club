export interface IUserProfile {
  telegramLink: string;
  gender: 'male' | 'female';
  city: string;
  country: string;
  location: number[];
  cources: string[];
  technology: string[];
  interests: string[];
}

export interface IOption {
  value?: string;
  label: string;
  key: string;
}

export interface FiltersData {
  interests: string[];
  technologies: string[];
  cources: string[];
}
export interface Preference {
  value: string;
  category: string;
  isActive: boolean;
}
export interface IUser {
  githubName: string;
  telegramLink?: string;
  gender: 'male' | 'female';
  profilePicture?: string;
  address?: string;
  location?: [number, number];
  role: 'admin' | 'user';
  signupDate: Date;
  lastActivity: Date;
  status: 'active' | 'inactive';
  preferences: string[];
  technology: string[];
  courses: string[];
  _id: string;
}

export interface IAuthorizationResponse {
  statusCode: number;
  message: string;
}
