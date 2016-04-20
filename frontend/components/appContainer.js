import React from 'react';
import { connect, Provider } from 'react-redux';
import { init } from '../actions/appActions';

export class App extends React.Component {
    componentWillMount(){
      this.props.init();
    }
    render(){
       return (
            <div> Your App is here
            </div>
           )
    }
}
const mapStateToProps = (state)=>{
    return {}
};
export const AppContainer = connect(mapStateToProps, { init })(App);
