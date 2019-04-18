import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
  
export class GoalBox extends Component {

    constructor(props)
    {
      super(props);
      this.state =
      {
        checked: false
      };
    }

    handleClick = event => {
        if(this.state.checked)
        {
            this.setState({
                checked: false
              });

        }
        else
        {
            this.setState({
                checked: true
         });
        }
      
      }

  render() {
    return (
      <div>
      <Button variant="dark" onClick={this.handleClick}> 
            {
                /** Buttons content is based on whether it is checked or not. */
                this.state.checked ? 
                (<i class="far fa-square fa-8x"></i> ) : 
                (<i class="fas fa-check fa-8x"></i> )
            }
      </Button>

    </div>
    )
  }
}


