import React from 'react';
import fontIcon from '../../components/text/FontIcon';
import AppIcon from './AppIcon';

const FollowUsMenu = (t, screenType) => {
  const textclass = 'align-middle text-center small';
  let iconSize = 'la-lg';
  if (screenType !== 'miniV') {
    iconSize = 'la-lg';
  }

  const title = <span className={textclass}>{t('moreaboutme')}</span>;

  const iconClassName = "pl-1 iconlink"
  

  const icons = (
    <>
      <a href="https://www.linkedin.com/in/nietodaniel-apps/" className={iconClassName}>{fontIcon(iconSize,"pl-2","la la-linkedin")}</a>
      <a href="https://github.com/nietodaniel/" className={iconClassName}>{fontIcon(iconSize,"pl-2","la la-github")}</a>
      {AppIcon()}
    </>
  );

  let content = "";
  if (screenType === 'miniV') {
    content = (
      <>
        <span className="d-table-row small">{title}</span>
        <span className="d-table-row">{icons}</span>
      </>
    );
  } else {
    content = (
      <>
        <span>{title}</span>
        <span>{icons}</span>
      </>
    );
  }

  return (
    <span className="text-white  d-block">
        {content}
    </span>
  )
};

export default FollowUsMenu;
