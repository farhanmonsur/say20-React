import React, { Component } from 'react'
import  MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import  AppBar  from 'material-ui/AppBar';
import { RaisedButton } from 'material-ui';

export class HowToPlay extends Component {

    render() {
        const{nextPage}=this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Here's How To Play"/>
                    <br/>
                    <label>One may count upto one or two  numbers per turn, and 
                        the numbers must be in counting order."
                    </label>
                    <br/>
                    <RaisedButton 
                    label="Go Back"
                    onClick={nextPage}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default HowToPlay
