import React from "react";
import { DashboardControl, ResourceManager} from "devexpress-dashboard";

class DashboardComponent extends React.Component {
   constructor(props) {
      super(props);
      ResourceManager.embedBundledResources( )
   }

   componentDidMount( ) {
      this.DashboardControl = new DashboardControl(this.refs.dashboardContainer, {
         endpoint:"https://demos.devexpress.com/services/dashboard/api",
         workingMode: "Designer"
      });
      this.DashboardControl.render( );
   }

   componentWillUnmount( ) {
      this.dashboardControl.dispose( );
   }

   render( ) {
      return (
         <div ref="dashboardContainer" style={{width: "100%", height: "100%"}}></div>
      );
   }
}

export default DashboardComponent;