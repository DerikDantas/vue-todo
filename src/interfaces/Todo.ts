export interface ITodo {
  content: string;
  category: 'business' | 'personal';
  done: boolean;
  createdAt: number;
}
