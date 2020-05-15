import React, { Component } from 'react'
import  MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import  AppBar  from 'material-ui/AppBar';
import { RaisedButton } from 'material-ui';
import { green500 } from 'material-ui/styles/colors';

export class HowToPlay extends Component {

    render() {
        const{nextPage}=this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar showMenuIconButton={false} titleStyle={styles.AppTitle} title="Say20"/>
                    <br/>
                    <h4>Here's how to play</h4>
                    <br/>
                    <div style={styles.instructions}>
                    <label>One may count upto one or two  numbers per turn, and the numbers must be in counting order.
                    </label>
                    <br/>
                    <label>One must start with the number after the last one that the other one said.
                    </label>
                    <br/>
                    <label>For example, the first player can say '1' or '2'.
                    </label>
                    <br/>
                    <label>If the first player says '2', then the second player could say '3' or '4' and so on.
                    </label>
                    <br/>
                    <label style={styles.main}>The first one to say '20' will win the game.
                    </label>
                    </div>
                    <br/>
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

const styles = {
    AppTitle: {
        fontFamily: 'Yellowtail',
        fontSize: 32
    },
    instructions: {
        fontSize: 20  
    },
    main: {
        color: green500,
        fontSize: 26
    }
}

export default HowToPlay
