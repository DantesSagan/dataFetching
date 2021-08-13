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
  background: rgb(0, 52, 89);
  background: radial-gradient(
    circle,
    rgba(0, 52, 89, 1) 26%,
    rgba(191, 250, 250, 1) 100%
  );
  border-radius: 40px;
`;
