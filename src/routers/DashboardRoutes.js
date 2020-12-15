import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PremiumSoftware from '../pages/content/softwarePremium';
import FreeSoftware from '../pages/content/softwareFree';
import UpcomingSoftware from '../pages/projects/upcomingSoftware';
import Education from '../pages/experience/education';
import References from '../pages/experience/references';
import Entrepreneurships from '../pages/projects/entrepreneurships';
import Experience from '../pages/experience/experience';
import Home from '../pages/structure/home';
import Projects from '../pages/projects/projects';
import Repositories from '../pages/content/repositories';
import Story from '../pages/experience/story';
import Notfound from '../pages/structure/notfound';
import Terms from '../pages/legal/terms';
import Privacy from '../pages/legal/privacy';
import Cookies from '../pages/legal/cookies';
import DataSciencePackages  from '../pages/content/dataSciencePackages';
import WorkProfile  from '../pages/content/workprofile';
import Skills  from '../pages/content/skills';
import Cv from '../pages/experience/cv';
import ComingSoon from '../pages/structure/comingsoon';


class DashboardRoutes extends React.Component {

  render() {

    return (
      <>
        <Switch>
          <Route exact path="/:lang/software/upcoming" render={() => (<UpcomingSoftware screenType={this.props.screenType} />)}  />
          <Route exact path="/:lang/software/free" render={() => (<FreeSoftware screenType={this.props.screenType} />)}  />
          <Route exact path="/:lang/software" render={() => (<PremiumSoftware screenType={this.props.screenType} />)}  />
          <Route exact path="/:lang/datascience/packages" render={() => (<DataSciencePackages screenType={this.props.screenType} />)}  />
          <Route exact path="/:lang/workprofile" render={() => (<WorkProfile screenType={this.props.screenType} />)}  />
          <Route exact path="/:lang/skills" render={() => (<Skills screenType={this.props.screenType} />)}  />
          <Route exact path="/:lang/references" render={() => (<References screenType={this.props.screenType} />)}  />
          <Route exact path="/:lang/education" render={() => (<Education screenType={this.props.screenType} />)}  />
          <Route exact path="/:lang/entrepreneurships" render={() => (<ComingSoon screenType={this.props.screenType} />)}  />
          <Route exact path="/:lang/experience" render={() => (<Experience screenType={this.props.screenType} />)}  />
          <Route exact path="/:lang/projects" render={() => (<ComingSoon screenType={this.props.screenType} />)}  />
          <Route exact path="/:lang/repositories" render={() => (<Repositories screenType={this.props.screenType} />)}  />
          <Route exact path="/:lang/story" render={() => (<ComingSoon screenType={this.props.screenType} />)}  />
          <Route exact path="/:lang/terms" render={() => (<Terms screenType={this.props.screenType} />)}  />
          <Route exact path="/:lang/privacy" render={() => (<Privacy screenType={this.props.screenType} />)}  />
          <Route exact path="/:lang/cv" render={() => (<Cv screenType={this.props.screenType} />)}  />
          <Route exact path="/:lang/cookies" render={() => (<Cookies screenType={this.props.screenType} />)}  />
          <Route exact path="/:lang/" render={() => (<Home screenType={this.props.screenType} />)}  />
          <Route path="" render={() => (<Notfound screenType={this.props.screenType} />)}  />
        </Switch>
      </>
    );
  }
}
export default DashboardRoutes;

