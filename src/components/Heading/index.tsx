import React from 'react';

interface IHeading {
  size: number;
  className?: string;
}

const Heading: React.FC<IHeading> = ({ children, size }) => {
  const HTag = `h${size}` as keyof JSX.IntrinsicElements;
  return <HTag>{children}</HTag>;
};

export default Heading;
