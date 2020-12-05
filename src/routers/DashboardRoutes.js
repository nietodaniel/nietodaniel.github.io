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

class DashboardRoutes extends React.Component {

  render() {
    console.log("re-rendered main content")
    const customProps = this.props
    return (
      <>
        <Switch>
          <Route exact path="/:lang/software/upcoming" render={() => (<UpcomingSoftware {...customProps}/>)}  />
          <Route exact path="/:lang/software/free" render={() => (<FreeSoftware {...customProps}/>)}  />
          <Route exact path="/:lang/software" render={() => (<PremiumSoftware {...customProps}/>)}  />
          <Route exact path="/:lang/datascience/packages" render={() => (<DataSciencePackages {...customProps}/>)}  />
          <Route exact path="/:lang/workprofile" render={() => (<WorkProfile {...customProps}/>)}  />
          <Route exact path="/:lang/services" render={() => (<Services {...customProps}/>)}  />
          <Route exact path="/:lang/education" render={() => (<Education {...customProps}/>)}  />
          <Route exact path="/:lang/entrepreneurships" render={() => (<Entrepreneurships {...customProps}/>)}  />
          <Route exact path="/:lang/experience" render={() => (<Experience {...customProps}/>)}  />
          <Route exact path="/:lang/projects" render={() => (<Projects {...customProps}/>)}  />
          <Route exact path="/:lang/repositories" render={() => (<Repositories {...customProps}/>)}  />
          <Route exact path="/:lang/story" render={() => (<Story {...customProps}/>)}  />
          <Route exact path="/:lang/terms" render={() => (<Terms {...customProps}/>)}  />
          <Route exact path="/:lang/privacy" render={() => (<Privacy {...customProps}/>)}  />
          <Route exact path="/:lang/cookies" render={() => (<Cookies {...customProps}/>)}  />
          <Route exact path="/:lang/" render={() => (<Home {...customProps}/>)}  />
          <Route path="" render={() => (<Notfound {...customProps}/>)}  />
        </Switch>
      </>
    );
  }
}
export default DashboardRoutes;

