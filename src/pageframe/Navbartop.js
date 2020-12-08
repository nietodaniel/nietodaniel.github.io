import React from 'react';
import LangMenu from './menus/LangMenu';
import ExperienceMenu from './menus/ExperienceMenu';
import ProductsServices from './menus/ProductsServices';
import ProjectsMenu from './menus/ProjectsMenu';
import HomeLink from './menus/HomeLink';
import { withTranslation } from 'react-i18next';

class NavbarTop extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.AllowReRender(nextProps, this.props);
  }

  render() {

    const menuClassName =
      'nav-item dropdown m-0  mainmenuitem';

    let preZone = ""
    let postZone = ""
    let lowerMenusWidth = 2

    if (this.props.screenType === 'miniV') {
      lowerMenusWidth = 4
      preZone= <>
        <div className="col-9 text-center  m-0 p-0 d-inline" style={{ minHeight: '24px' }}>
          {HomeLink(this.props.t,this.props.locale)}
        </div>
        <div className="col-3 text-center  m-0 p-0 d-inline" style={{ minHeight: '24px' }}>
          {LangMenu(menuClassName, this.props.i18n,this.props.locale,this.props.path)}
        </div>
      </>
    } else {
      preZone= <div className="col-4 text-center  m-0 p-0 d-inline" style={{ minHeight: '24px' }}>
        {HomeLink(this.props.t,this.props.locale)}
      </div>
      postZone = <div className="col-2 text-center  m-0 p-0 d-inline" style={{ minHeight: '24px' }}>
        {LangMenu(menuClassName, this.props.i18n, this.props.locale,this.props.path)}
      </div>
    }

    return (
      <div id="header" className="m-0 p-0">
        <nav
          className="navbar navbar-expand-md navbar-dark nicedarkbluebackground m-0 p-0 "
          style={{ minHeight: '24px' }}
        >
          <div className="container-fluid text-center m-0 p-0">
            <div className="nicedarkbluebackground row text-center  small align-middle p-0 m-0  w-100">
              {preZone}
              <div className={"col-"+lowerMenusWidth+" text-center  m-0 p-0 d-inline"} style={{ minHeight: '24px' }}>
                {ExperienceMenu(this.props.t,menuClassName,this.props.locale)}
              </div>
              <div className={"col-"+lowerMenusWidth+" text-center  m-0 p-0 d-inline"} style={{ minHeight: '24px' }}>
                {ProductsServices(this.props.t,menuClassName,this.props.locale)}
              </div>
              <div className={"col-"+lowerMenusWidth+" text-center  m-0 p-0 d-inline"} style={{ minHeight: '24px' }}>
                {ProjectsMenu(this.props.t,menuClassName,this.props.locale)}
              </div>
              {postZone}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default withTranslation(['main'])(NavbarTop);