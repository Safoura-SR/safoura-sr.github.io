import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from '@components';
import Fertigkeit from '../components/sections/fertigkeit';
import Forschung from '../components/sections/forschung';
import Certificate from '../components/sections/certificate';
import Experi from '../components/sections/experi';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
    <Hero />
    <About />
    <Forschung />
    <Jobs />
    <Fertigkeit/>
    <Featured />
    <Certificate />
    <Experi />
    <Contact />
    </StyledMainContainer>
  </Layout>
);


//<Projects />
//<Contact />


IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
