import React from 'react';
import styled from 'styled-components';

const YourPricesContainer = styled.div`
  background-color: white;
`;

const YourPricesCard = (props) => {
  return (
    <div className="card-with-title">
      <h3> Profile </h3>
      <YourPricesContainer className="profile-review-status-card">
        <div>
          <div> ? </div>
          <div> For people outside my network that want to get in touch with me, I can now be reached through Earn.com </div>
        </div>
      </YourPricesContainer>
    </div>
  );
};

export default YourPricesCard;