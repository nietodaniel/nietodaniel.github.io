import React from 'react';

const SpCard = (className, backgroundImgName,title,content) => {

  const imgLocation = require('../../assets/img/' + backgroundImgName);
  return (
    <Card className={className}>
      <Card.Img variant="top" src={imgLocation} />
      <Card.Body>
        <Card.Title className={titleClass}>{title}</Card.Title>
        <Card.Text as="span" className={contentClass}>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SpCard;
