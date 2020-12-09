import React from 'react';
import FollowUsMenu from './menus/FollowUsMenu';
import PrivacyMenu from './menus/PrivacyMenu';
import ContactMenu from './menus/ContactMenu';
import { withTranslation } from 'react-i18next';

class NavbarBottom extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.AllowReRender(nextProps, this.props);
  }

  render() {
    console.log('NavBar Bottom re-rendered');


    let LowerContactMenu =""
    let UpperContactMenu =""
 
    if (this.props.screenType === 'miniV') {
      UpperContactMenu = ContactMenu(
        this.props.t,
        true
      );
      }else{

      LowerContactMenu = (
        <div className="small small col-2 text-center m-auto p-0">
          <span className="d-none d-sm-block">
            {ContactMenu(this.props.t, false)}
          </span>
          <span> </span>
        </div>
      );
    }

    const overNav = (
      <>
        <div id="navchat" className="w-100 container-flex p-0 m-0 ml-2 mr-2">
          {UpperContactMenu}
        </div>
      </>
    );

    let colDistributionA = 6;
    let colDistributionB = 4;
    if (this.props.screenType==="miniV" ) {
      colDistributionA = 6
      colDistributionB = 6
    }

    const content = (
      <>
        <div className={"col-" + colDistributionA + " text-center m-auto p-0"}>
          {FollowUsMenu(this.props.t, this.props.screenType)}
        </div>
        <div className={"col-" + colDistributionB + " text-center m-auto p-0 small"}>
          {PrivacyMenu(
            this.props.t,
            this.props.screenType,
            this.props.locale
          )}
        </div>
        {LowerContactMenu}
      </>
    );

    return (
      <footer id="footer" className="p-0 m-0 nomouse">
        {overNav}
        <nav
          className="allowmouse nicedarkbluebackground navbar navbar-expand  p-0 m-0"
          style={{ minHeight: '20px' }}
        >
          <div className="container-fluid text-center m-0 pl-2 pr-2">
            <div className="row w-100 text-center  small align-middle p-0 m-0  w-100">
              {content}
            </div>
          </div>
        </nav>
      </footer>
    );
  }
}

export default withTranslation(['main'])(NavbarBottom);
