import React from 'react';
import styled from 'styled-components';

const NotificationReviewStatusCard = styled.div`
  background-color: white;
`;

const NotificationCard = (props) => {
  return (
    <div className="card-with-title">
      <h3> Notifications </h3>
      <NotificationReviewStatusCard className="profile-review-status-card">
        <div>
          <div> ? </div>
          <div> Your profile is unverified. Complete the verification task in your inbox </div>
        </div>
      </NotificationReviewStatusCard>
    </div>
  );
};

export default NotificationCard;