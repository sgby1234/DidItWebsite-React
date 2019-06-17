import React, { Component } from 'react'

export class About extends Component {

    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        if(true)
        {
            alert("Will change");
            this.props.history.push("/goals");
        }
        else {
            alert("Back at about in the else");
        }
       
        
    }
    render() {
        return (
            <div className="text-center">
                <h1>Our Story</h1>
                <p>DidIt is a website created by me, Shifra, in my Spring 2019 semester at Touro College. This website was created for a project
                    working in React and Spring. I learnt loads of new stuff. Please keep in mind that this website is my first website using these technologies, so 
                    there are definitely bugs <i class="fas fa-bug"></i> <i class="fas fa-bug"></i> <i class="fas fa-bug"></i> </p>
                  

            <button onClick={this.handleClick}/>
                
            </div>
        )
    }
}
