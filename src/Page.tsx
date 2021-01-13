import React from 'react';
import List from './List';

export type Todo = {
  name: string;
  completed: boolean;
};

const DUMMY: Todo[] = [
  { name: 'Elva Reed', completed: false },
  { name: 'Lora Benson', completed: false },
  { name: 'Marcus Cunningham', completed: true }
];

const Page: React.FC = () => {
  return <List todos={DUMMY} />;
};

export default Page;
