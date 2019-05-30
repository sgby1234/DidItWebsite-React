import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

  
export class GoalBox extends Component {

    constructor(props)
    {
      super(props);
      this.state =
      {
        checked: this.props.checked
      };
    }

    handleClick = event => {
        if(this.state.checked)
        {
            this.setState({
                checked: false
              });
            this.props.removeCheckMark();

        }
        else
        {
            this.setState({
                checked: true
         });

           this.props.addCheckMark();
        }
      
      }

  render() {
    return (
      <div>
      <Button variant="dark" onClick={this.handleClick}> 
            {
                /** Buttons content is based on whether it is checked or not. */
                this.state.checked ? 
                 (<i className="fas fa-check fa-s"></i> ):
                 (<i className="far fa-square fa-s"></i> ) 
            }
      </Button>

    </div>
    )
  }
}


