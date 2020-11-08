import React from 'react';

interface IHeading {
  size: number;
}

const Heading: React.FC<IHeading> = ({ children, size }) => {
  const HTag = `h${size}` as keyof JSX.IntrinsicElements;
  return <HTag>{children}</HTag>;
};

export default Heading;
