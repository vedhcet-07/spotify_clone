export interface User {
  id: string;
  email: string;
  password: string;
  username: string;
}

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'john@example.com',
    password: 'password123',
    username: 'John Doe'
  },
  {
    id: '2',
    email: 'jane@example.com',
    password: 'password123',
    username: 'Jane Smith'
  }
];