export const interestsList = [
  { key: '_mentor', value: 'can be a mentor', label: 'can be a mentor' },
  { key: '_friends', value: 'looking for friends', label: 'looking for friends' },
  { key: '_action', value: 'likes to move', label: 'likes to move' },
  { key: '_chat', value: 'open to communicate', label: 'open to communicate' },
  { key: '_beer', value: 'use a couple of beers', label: 'use a couple of beers' },
  { key: '_local', value: 'can show the city', label: 'can show the city' },
  { key: '_office', value: 'can show the office', label: 'can show the office' },
  { key: '_employ', value: 'looking for employees', label: 'looking for employees' },
  { key: '_job', value: 'looking for a job', label: 'looking for a job' },
  { key: '_relocate', value: 'looking for a relocation', label: 'looking for a relocation' },
];

export const technologiesList = [
  { key: '_js', label: 'JavaScript', value: '_js' },
  { key: '_python', label: 'Python', value: '_python' },
  { key: '_ts', label: 'TypeScript', value: '_ts' },
  { key: '_node', label: 'Node.js', value: '_node' },
  { key: '_angular', label: 'Angular', value: '_angular' },
  { key: '_react', label: 'React', value: '_react' },
  { key: '_vue', label: 'Vue.js', value: '_vue' },
];
export const courcesList = [
  { key: '_js/fe', label: 'JavaScript/FE Course', value: '_js/fe' },
  { key: '_ios', label: 'iOS Cource', value: '_ios' },
  { key: '_android', label: 'Android Cource', value: '_android' },
  { key: '_node', label: 'Node.js in AWS', value: '_node' },
  { key: '_angular', label: 'Angular Course', value: '_angular' },
  { key: '_react', label: 'React Course', value: '_react' },
];

export const BASE_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api' : '/api';
