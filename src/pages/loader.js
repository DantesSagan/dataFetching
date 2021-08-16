import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import React from 'react';
import styled from 'styled-components';

const Fallback = () => (
  <FallbackContainer>
    <Loader type='Puff' color='#F8F0FB' height={80} width={80} timeout={3000} />
  </FallbackContainer>
);

export default Fallback;

const FallbackContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0.5turn);
  background: rgb(0, 70, 54);
  background: radial-gradient(
    circle,
    rgba(0, 70, 54, 1) 0%,
    rgba(255, 95, 95, 1) 50%,
    rgba(112, 15, 15, 1) 80%,
    rgba(23, 4, 4, 1) 100%
  );
  border-radius: 40px;
`;
