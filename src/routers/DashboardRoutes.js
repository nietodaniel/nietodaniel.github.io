import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PremiumSoftware from '../pages/content/softwarePremium';
import FreeSoftware from '../pages/content/softwareFree';
import UpcomingSoftware from '../pages/projects/upcomingSoftware';
import Education from '../pages/experience/education';
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
import Services  from '../pages/content/services';
import Cv from '../pages/experience/cv';
import { ScreenContext } from "./ScreenContext"


class DashboardRoutes extends React.Component {

  static contextType = ScreenContext;

  render() {
    console.log("re-rendered main content")

    const ScreenContext = this.context

    return (
      <>
        <Switch class="">
          <Route exact path="/:lang/software/upcoming" render={() => (<UpcomingSoftware screencontext={ScreenContext} />)}  />
          <Route exact path="/:lang/software/free" render={() => (<FreeSoftware screencontext={ScreenContext} />)}  />
          <Route exact path="/:lang/software" render={() => (<PremiumSoftware screencontext={ScreenContext} />)}  />
          <Route exact path="/:lang/datascience/packages" render={() => (<DataSciencePackages screencontext={ScreenContext} />)}  />
          <Route exact path="/:lang/workprofile" render={() => (<WorkProfile screencontext={ScreenContext} />)}  />
          <Route exact path="/:lang/services" render={() => (<Services screencontext={ScreenContext} />)}  />
          <Route exact path="/:lang/education" render={() => (<Education screencontext={ScreenContext} />)}  />
          <Route exact path="/:lang/entrepreneurships" render={() => (<Entrepreneurships screencontext={ScreenContext} />)}  />
          <Route exact path="/:lang/experience" render={() => (<Experience screencontext={ScreenContext} />)}  />
          <Route exact path="/:lang/projects" render={() => (<Projects screencontext={ScreenContext} />)}  />
          <Route exact path="/:lang/repositories" render={() => (<Repositories screencontext={ScreenContext} />)}  />
          <Route exact path="/:lang/story" render={() => (<Story screencontext={ScreenContext} />)}  />
          <Route exact path="/:lang/terms" render={() => (<Terms screencontext={ScreenContext} />)}  />
          <Route exact path="/:lang/privacy" render={() => (<Privacy screencontext={ScreenContext} />)}  />
          <Route exact path="/:lang/cv" render={() => (<Cv screencontext={ScreenContext} />)}  />
          <Route exact path="/:lang/cookies" render={() => (<Cookies screencontext={ScreenContext} />)}  />
          <Route exact path="/:lang/" render={() => (<Home screencontext={ScreenContext} />)}  />
          <Route path="" render={() => (<Notfound screencontext={ScreenContext} />)}  />
        </Switch>
      </>
    );
  }
}
export default DashboardRoutes;

