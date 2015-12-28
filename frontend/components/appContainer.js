import React from 'react';
import { connect, Provider } from 'react-redux';
import { setState } from '../actions/appActions';
require('styles/app');
export class App extends React.Component {
    componentWillMount(){
        let { dispatch } = this.props;
        dispatch(setState());
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
export const AppContainer = connect(mapStateToProps)(App);
