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

class PageFrame extends React.Component {
  render() { 
    const {path,locale} = GetLocaleAndPath(this.props.i18n)

    console.log("this.props.i18n")
    console.log(this.props.i18n)

    const mainT = (word) => this.props.i18n.t('main:' + word);

    console.log("mainT")
    console.log(mainT)

    const t = (word) => this.props.i18n.t(word);

    const head = 


    console.log("mainT2")
    console.log(mainT)

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
              <MainContainer
                path="/:lang/"
                t={t}
                AllowReRender={AllowReRenderContent}
                locale={locale}
              />
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
