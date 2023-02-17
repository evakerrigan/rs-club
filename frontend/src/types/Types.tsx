export interface IUser {
  name: string;
  gender: 'male' | 'female';
  city: string;
  cources: string[];
  technologies: string[];
}

export interface IOption {
  value: string;
  key: string;
}
