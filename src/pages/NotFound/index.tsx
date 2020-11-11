import React from 'react';
import { navigate } from 'hookrouter';
import Button from '../../components/Button';

const NotFoundPage = () => {
  return (
    <div>
      <Button
        onClick={() => {
          navigate('/');
        }}>
        Go home
      </Button>
    </div>
  );
};

export default NotFoundPage;
