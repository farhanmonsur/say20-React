import React, { Component } from 'react'
import {Home} from './Home'
import {HowToPlay} from './HowToPlay';
import { ChooseDifficulty } from './ChooseDifficulty';
import {ChooseTurn} from './ChooseTurn';
import {Gameplay} from './Gameplay';

export class Say20 extends Component {
    state = {
        page:1,
        user:0,
        pc:0,
        difficulty: 'h',
        trap: 'false'
    };


    nextPage = () => {
        const { page } = this.state;
        this.setState({
          page: page + 1
        });
      };

      prevPage = () => {
        const { page } = this.state;
        this.setState({
          page: page - 1
        });
      };

      setDifficulty = (input) => {
        this.setState({ difficulty:input });
      };

      random_pc = () => {
        const { pc } = this.state;
        this.setState({
          pc: pc+1+Math.round(Math.random())
        });
      };

      set_user = (input) => {
        const {pc}=this.state;
        if(input==='1'){
            this.setState({ user: pc + 1 });
        }else{
            this.setState({ user: pc + 2 });
        }
        this.set_pc();
      };

      set_pc = () => {
        const { pc, difficulty, trap, user } = this.state;
        if(difficulty==='e'){
            this.random_pc();
        }else{
            if(pc===2){
                this.setState({ trap: 'true' });
            }
            if(trap==='false'){
                if (user===2||user===5||user===8||user===11||user===14||user===17||user===20||user===0){
                    this.random_pc();
                }else {
                    if (user===pc+2){
                        this.setState({ pc: user+2 });
                        this.setState({ trap: 'true' });
                    } else {
                        this.setState({ pc: user+1 });
                        this.setState({ trap: 'true' });
                    }
                }
            }else{
                if(user===pc+1){
                    this.setState({ pc: user+2 });
                }else{
                    this.setState({ pc: user+1 });
                }
            }
        }
      };

    render() {
        const {page, pc, user}=this.state;

        switch(page){
            case 0:
                return(<HowToPlay
                    nextPage={this.nextPage}
                />);
            case 1:
                return(<Home
                    nextPage={this.nextPage}
                    prevPage={this.prevPage}
                />);
            case 2:
                return(<ChooseDifficulty
                    nextPage={this.nextPage}
                    prevPage={this.prevPage}
                    setDifficulty={this.setDifficulty}
                />);
            case 3:
                return(<ChooseTurn
                    nextPage={this.nextPage}
                    prevPage={this.prevPage}
                    random_pc={this.random_pc}
                />);
            case 4:
                return(<Gameplay
                    nextPage={this.nextPage}
                    prevPage={this.prevPage}
                    random_pc={this.random_pc}
                    pc={pc}
                    user={user}
                    set_user={this.set_user}
                    set_pc={this.set_pc}
                />);
        }
    }
}

export default Say20
