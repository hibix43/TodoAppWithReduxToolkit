import React from 'react';

export const List: React.FC<JSX.IntrinsicElements['ul']> = (props) => {
  return <ul>{props.children}</ul>;
};
