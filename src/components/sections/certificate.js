import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Certificate = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="certificates" ref={revealContainer}>
      <h2 className="numbered-heading">My Certificate </h2>

      <p>
        ✓  {' '} <a href=""> Robotics</a>, Technical & Vocational Training Organization.
      </p>
      <p>
        ✓  {' '} <a href="https://cs50.harvard.edu/certificates/57368179-a565-4efa-aff5-e20ed296a43c"> CS50x</a>, Harvard University.
      </p>
      <p>
        ✓  {' '} <a href="https://certificates.cs50.io/d84b8f9f-3d7f-4ec5-a2c1-4d3f58644500.pdf?size=letter"> CS50p</a>, Harvard University.
      </p>
      <p>
        ✓  {' '} <a href="https://certificates.cs50.io/1742ba9e-d101-445d-893a-0485729b578a.pdf?size=letter"> CS50ai</a>, Harvard University.
      </p>
      <p>
        ✓  {' '} <a href=""> Piping</a>, Falat Ghareh Technical Institute is loading ...
      </p>
    </StyledContactSection>
  );
};

export default Certificate;
