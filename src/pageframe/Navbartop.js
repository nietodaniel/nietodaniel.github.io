import React from 'react';
import LangMenu from './menus/LangMenu';
import ExperienceMenu from './menus/ExperienceMenu';
import MyContentsMenu from './menus/MyContentsMenu';
import ProjectsMenu from './menus/ProjectsMenu';

class NavbarTop extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.AllowReRender(nextProps, this.props);
  }

  render() {
    console.log("NavBar Top re-rendered")
    const menuClassName =
      'nav-item dropdown m-0  mainmenuitem';

    return (
      <div id="header" className="m-0 p-0">
        <nav
          className="navbar navbar-expand-md navbar-dark nicedarkbluebackground m-0 p-0 "
          style={{ minHeight: '24px' }}
        >
          <div className="container-fluid text-center m-0 p-0">
            <div className="nicedarkbluebackground row text-center  small align-middle p-0 m-0  w-100">
              <div className="col-12 col-sm-4 text-center container-fluid  m-0 p-0 d-inline" style={{ minHeight: '24px' }}>
                <h2 className="text-white normaltext p-0 m-0">{this.props.mainT("dnportfolio")}</h2>
              </div>
              <div className="col-3 col-sm-2 text-center container-fluid  m-0 p-0 d-inline" style={{ minHeight: '24px' }}>
                {ExperienceMenu(this.props.mainT,menuClassName,this.props.locale)}
              </div>
              <div className="col-3 col-sm-2 text-center container-fluid  m-0 p-0 d-inline" style={{ minHeight: '24px' }}>
                {MyContentsMenu(this.props.mainT,menuClassName,this.props.locale)}
              </div>
              <div className="col-3 col-sm-2 text-center container-fluid  m-0 p-0 d-inline" style={{ minHeight: '24px' }}>
                {ProjectsMenu(this.props.mainT,menuClassName,this.props.locale)}
              </div>
              <div className="col-3 col-sm-2 text-center container-fluid  m-0 p-0 d-inline" style={{ minHeight: '24px' }}>
                {LangMenu(menuClassName, this.props.locale, this.props.i18n, this.props.path)}
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavbarTop;