import Carousel from 'react-bootstrap/Carousel'

const  BaseCarrousel = (carrouselArray,carrouselClass,itemClass, titleClass, contentClass, titleTag) => {
  if (itemClass !== '') itemClass = ' ' + itemClass;

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const carrouselItemMaker = (carrouselObject) => {
    const carrouselItem = carrouselObject[0];
    const title = carrouselObject[1];
    const caption = carrouselObject[2];
    const intervalTime = carrouselObject[3];

    const carrouselItemContent = <>
        <span className={'carrousel-item' + itemClass}>{carrouselItem}</span>
        <Carousel.Caption>
          {textWithTitle(title, caption, titleClass, contentClass, titleTag)}
        </Carousel.Caption>
    </>
    let carrouselObjectRendered =""

    if(intervalTime===0){
      carrouselObjectRendered = <Carousel.Item>
        {carrouselItemContent}
      </Carousel.Item>
    }else{
      carrouselObjectRendered = <Carousel.Item interval={intervalTime}>
        {carrouselItemContent}
      </Carousel.Item>
    }
    return (
      carrouselObjectRendered
    );
  };

  const content = carrouselArray.map((carrouselObject) =>
    carrouselItemMaker(carrouselObject)
  );

  return (
    <Carousel
      className={carrouselClass}
      activeIndex={index}
      onSelect={handleSelect}
    >
      {content}
    </Carousel>
  );
}

export default BaseCarrousel;
