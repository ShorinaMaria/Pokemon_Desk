import React from 'react';

interface EmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => (
  <div>
    <div>Empty page for {title}.</div>
  </div>
);

export default EmptyPage;
