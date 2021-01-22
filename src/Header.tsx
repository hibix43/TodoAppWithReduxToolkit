import React from 'react';

type Props = {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Header: React.FC<Props> = ({ children, level }) => {
  const Tag = React.createElement(`h${level}`, null, children);
  return <>{Tag}</>;
};
