import React, { Component } from 'react'
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import  AppBar  from 'material-ui/AppBar';
import  RaisedButton  from 'material-ui/RaisedButton';

export class ChooseTurn extends Component {
    
    no = () => {
        this.props.random_pc();    
        this.props.nextPage();
    };

    render() {
        const{prevPage, nextPage}=this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Say20"/>
                    <br/>
                    <h1>Do you want to start?</h1>
                    <br/>
                    <RaisedButton 
                    label="Yes"
                    onClick={nextPage}
                    />
                    <br/>
                    <br/>
                    <RaisedButton label="No"
                    onClick={this.no}
                    />
                    <br/>
                    <br/>
                    <RaisedButton label="Go Back"
                    onClick={prevPage}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default ChooseTurn
