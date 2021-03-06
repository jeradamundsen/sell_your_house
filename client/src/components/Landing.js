import React, { Component } from 'react';

import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchProperties} from '../actions'
import MyMap from './MyMap'

 class Landing extends Component {
 componentDidMount(){
  this.props.fetchProperties()
}
   renderCreate(){
     if(this.props.isSignedIn){
       return(
         <div style={{ textAlign: 'right' }}>
           <Link to="/properties/new" className="ui button primary">List Your Property</Link>
         </div>

       )
     }
   }
   renderContent(){
     if(this.props.isSignedIn){
       return(
         <div  style={{height: '100%'}}>
           <h2>Real Estate For Sale</h2>
           <MyMap/>
           {this.renderCreate()}
         </div>

       )
     }
       return(
         <div style={{height: '100%'}}>
           <h2>Real Estate For Sale</h2>
           <MyMap lat={32.776665} lng={-96.796989}/>
           <div>
             <div>Sign In With Google to list your property</div>
         </div>
       </div>
       )
     }

  render(){
    return (
      <div className="ui segment">
        {this.renderContent()}
      </div>
    );
  }

}
const mapStateToProps=(state)=>{
  return{
    isSignedIn: state.auth.isSignedIn,
    currentUserId: state.auth.userId,
    properties: Object.values(state.properties)
  }
}

export default connect(mapStateToProps,{fetchProperties}) (Landing)
