import React from 'react';
import PageFrame from './PageFrame';
import { BrowserRouter as Router } from 'react-router-dom';

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    const screenSize = this.ScreenSizeManager.getCurrentScreenSize();
    this.state = {
      screenSize: screenSize
    };
  }

  componentDidMount() {
    this.ScreenSizeManager.OrientationEvent();
  }

  componentWillUnmount() {
    clearInterval(this.AdBannerManager.Timer);
  }

  ScreenSizeManager = {
    OrientationChanger: () => {
      // `this` is now pointing to `window`, not the component. So use `self`.
      const currentScreenSize = this.ScreenSizeManager.getCurrentScreenSize();
      this.setState({
        screenSize: currentScreenSize
      });
    },
    OrientationEvent: () => {
      if ('onorientationchange' in window) {
        window.addEventListener(
          'orientationchange',
          this.ScreenSizeManager.OrientationChanger,
          true
        );
      }
    },
    getCurrentScreenSize: () => {
      let screenWidth = window.screen.width;
      let screenSize = '';
      if (screenWidth < 768) {
        screenSize = 'xs';
      } else if (screenWidth < 992) {
        screenSize = 'sm';
      } else if (screenWidth < 1200) {
        screenSize = 'md';
      } else {
        screenSize = 'lg';
      }
      return screenSize;
    },
  };

  render() {
    const w= window.screen.width;
    const h = window.screen.height;
    const orientation = h<w;

    return (
      <div id="main-container">
        <Router>
          <PageFrame
            i18n={this.props.i18n}
            ScreenSizeManager={this.ScreenSizeManager}
            screenSize={this.state.screenSize}
            orientation={orientation}
          />
        </Router>
      </div>
    );
  }
}

export default AppRouter;
