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
import HtmlHeadManager from '../localization/HtmlHeadManager'
import {getCurrentScreenType} from '../components/modules/ScreenType'


class PageFrame extends React.Component {
  
  constructor(props) {
    super(props);
    const screenType = getCurrentScreenType()
    this.state = {
      screenType: screenType
    };
  }

  componentDidMount() {
    if ('onorientationchange' in window) {
      window.addEventListener(
        'orientationchange',
        () => {
          // `this` is now pointing to `window`, not the component. So use `self`.
          const currentscreenType = getCurrentScreenType();
          this.setState({
            screenType: currentscreenType
          });
        },
        true
      );
    }
  }

  render() { 
    let redirectIfNecesarry = "";
    
    return (
      <>
        <HtmlHeadManager locale={this.props.locale} AllowReRender={AllowReRenderHelmet} />
        <NavbarTop
          locale={this.props.locale}
          i18n={this.props.i18n}
          screenType={this.state.screenType}
          AllowReRender={AllowReRenderTopNavBar}
        />
        <div id="wrapper" className="toggled">
            <Switch>
              {redirectIfNecesarry}          
              <MainContainer
                path="/:lang/"
                screenType={this.state.screenType}
                AllowReRender={AllowReRenderContent}
                locale={this.props.locale}
              />
              <Redirect to={'/' + this.props.locale} />
          </Switch>
        </div>
        <NavbarBottom
          locale={this.props.locale}
          AllowReRender={AllowReRenderBottomNavBar}
          screenType={this.state.screenType}
        />
      </>
    );
  }
}

export default PageFrame;
