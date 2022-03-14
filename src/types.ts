export interface Movie {
  id: number;
  title: string;
  description: string;
  duration: number;
  image: string;
}

export interface Actor {
  id: number;
  name: string;
  dateOfBirth: string
  film: string
}
