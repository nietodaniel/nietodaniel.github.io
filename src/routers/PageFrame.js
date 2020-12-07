import React from 'react';

import NavbarTop from '../pageframe/Navbartop';
import NavbarBottom from '../pageframe/Navbarbottom';


import { Redirect, Switch } from 'react-router-dom';
import {
  AllowReRenderTopNavBar,
  AllowReRenderBottomNavBar,
  AllowReRenderContent,
  AllowReRenderHelmet
} from '../components/modules/AllowReRender';
import MainContainer from './MainContainer';
import GetLocaleAndPath from '../components/modules/GetLocaleAndPath'
import HtmlHeadManager from '../localization/HtmlHeadManager'

import {MyContext as ScreenProvider} from './ScreenContext';

class PageFrame extends React.Component {
  render() { 
    const {path,locale} = GetLocaleAndPath(this.props.i18n)

    const mainT = (word) => this.props.i18n.t('main:' + word);
    const t = (word) => this.props.i18n.t(word);

    return (
      <>
        <HtmlHeadManager locale={locale} AllowReRender={AllowReRenderHelmet} />
        <NavbarTop
          locale={locale}
          i18n={this.props.i18n}
          mainT={mainT}
          screenSize={this.props.screenSize}
          orientation={this.props.orientation} 
          AllowReRender={AllowReRenderTopNavBar}
          path={path}
        />
        <div id="wrapper" className="toggled">
          <Switch>
            <ScreenProvider value={{'screenSize':this.props.screenSize,'orientation':this.props.orientation}}>
              <MainContainer
                path="/:lang/"
                t={t}
                AllowReRender={AllowReRenderContent}
                locale={locale}
              />
            </ScreenProvider>
            <Redirect to={'/' + locale} />
          </Switch>
        </div>
        <NavbarBottom
          locale={locale}
          mainT={mainT}
          AllowReRender={AllowReRenderBottomNavBar}
          ScreenSizeManager={this.props.ScreenSizeManager}
          screenSize={this.props.screenSize}
          orientation={this.props.orientation} 
        />
      </>
    );
  }
}

export default PageFrame;
