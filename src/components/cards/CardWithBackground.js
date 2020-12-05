import React from 'react';
import Card from 'react-bootstrap/Card'

const CardWithBackground = (titleClass,contentClass,className, backgroundImgName,imgAlt,title,content,imgClass) => {
  const imgSource = require('../../assets/img/'+ backgroundImgName );
  if(className!=="")
    className=" "+className
  return (
    <Card className={"bg-dark border-0 "+className}>
      <Card.Img className={imgClass} src={imgSource} alt={imgAlt} />
      <Card.ImgOverlay>
        <Card.Title className={titleClass}>{title}</Card.Title>
        <Card.Text as="span" className={contentClass}>{content}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default CardWithBackground;
