import React from 'react';

export const ListItem: React.FC<JSX.IntrinsicElements['li']> = (props) => {
  return <li>{props.children}</li>;
};
