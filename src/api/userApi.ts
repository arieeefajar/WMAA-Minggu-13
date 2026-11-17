export interface User {
  id: number;
  name: string;
}

export async function getUsers(): Promise<{ data: User[] }> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return { data };
}
