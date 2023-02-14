export class Preference {
  value: string;
  category: string;
  isActive: boolean;
}
export class User {
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
