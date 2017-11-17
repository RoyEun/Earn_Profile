import React from 'react';
import pencil from '../../images/pencil.svg';
import styled from 'styled-components';

const AboutYouContainer = styled.div`
  padding: 18px 24px;
  background-color: #fff;
  margin-bottom: 24px;

  & > * {
    display: table;
    table-layout: fixed;
    width: 100%;
  }

  & > * > * {
    display: table-cell;
  }

  & > * > *:nth-child(1) {
    width: 46px;
    padding-right: 5px;
    vertical-align: top;
  }
`;

const Img = styled.img`
  height: 14px;
  width: 14px;
  display: block;
`;

const AboutYouCard = (props) => {
  return (
    <div className="card-with-title">
      <h3> About you </h3>
      <AboutYouContainer className="profile-review-status-card">
        <div>
          <div>
            <Img src={pencil} />
          </div>
          <div> For people outside my network that want to get in touch with me, I can now be reached through Earn.com </div>
        </div>
      </AboutYouContainer>
    </div>
  );
};



export default AboutYouCard;