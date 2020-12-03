import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Apps from '../pages/apps';
import Education from '../pages/education';
import Entrepreneurships from '../pages/entrepreneurships';
import Experience from '../pages/experience';
import Home from '../pages/home';
import Projects from '../pages/projects';
import Repositories from '../pages/repositories';
import Story from '../pages/story';

class DashboardRoutes extends React.Component {

  render() {
    console.log("re-rendered main content")
    const customProps = this.props
    return (
      <>
        <Switch>
          <Route exact path="/:lang/apps" render={() => (<Apps {...customProps}/>)}  />
          <Route exact path="/:lang/education" render={() => (<Education {...customProps}/>)}  />
          <Route exact path="/:lang/entrepreneurships" render={() => (<Entrepreneurships {...customProps}/>)}  />
          <Route exact path="/:lang/experience" render={() => (<Experience {...customProps}/>)}  />
          <Route exact path="/:lang/projects" render={() => (<Projects {...customProps}/>)}  />
          <Route exact path="/:lang/repositories" render={() => (<Repositories {...customProps}/>)}  />
          <Route exact path="/:lang/story" render={() => (<Story {...customProps}/>)}  />
          <Route exact path="/:lang/" render={() => (<Home {...customProps}/>)}  />
          <Route path="" render={() => (<Notfound {...customProps}/>)}  />
        </Switch>
      </>
    );
  }
}
export default DashboardRoutes;

