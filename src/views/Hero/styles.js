import styled from 'styled-components';

export const Wrapper = styled.section`
  margin: 0 auto;
`;

export const Image = styled.div`
  min-height: 30vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center !important;
    transform-origin: center center !important;
  }
`;
