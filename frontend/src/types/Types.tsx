export interface IUserProfile {
  name: string;
  gender: 'male' | 'female';
  city: string;
  country: string;
  cources: string[];
  technologies: string[];
}
export interface IOption {
  value: string;
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
  firstName: string;
  lastName: string;
  gender: 'male' | 'female';
  profilePicture?: string;
  address?: string;
  location?: [number, number];
  role: 'admin' | 'user';
  signupDate: Date;
  lastActivity: Date;
  status: 'active' | 'inactive';
  preferences: Preference[];
  technology: string[];
  courses: string[];
}

export interface IAuthorizationResponse {
  statusCode: number;
  message: string;
}
