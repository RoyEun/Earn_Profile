import React from 'react';
import question from '../../images/question.svg';
import styled from 'styled-components';

const NotificationReviewStatusCard = styled.div`
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
  height: 24px;
  width: 24px;
  display: block;
`;

const NotificationCard = (props) => {
  return (
    <div className="card-with-title">
      <h3> Notifications </h3>
      <NotificationReviewStatusCard className="profile-review-status-card">
        <div>
          <div>
            <Img src={question} />
          </div>
          <div> Your profile is unverified. Complete the verification task in your inbox </div>
        </div>
      </NotificationReviewStatusCard>
    </div>
  );
};

export default NotificationCard;