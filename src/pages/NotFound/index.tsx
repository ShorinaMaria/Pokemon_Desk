import React from 'react';
import { navigate } from 'hookrouter';
import Button from '../../components/Button';
import { LinkEnum } from '../../routes';

const NotFoundPage = () => {
  return (
    <div>
      <Button
        onClick={() => {
          navigate(LinkEnum.HOME);
        }}>
        Go home
      </Button>
    </div>
  );
};

export default NotFoundPage;
