import React, { Component } from 'react'

export class AddFood extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            calories: '',
            image: '',
            isHidden: true
        }
    }

    handleChange(event){
        let {name, value} = event.target;
        this.setState({ [name]: value});
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.props.addFood(this.state)
        this.setState({
            name: '',
            calories: '',
            image: '',
        })
    }

    showForm = () => {
        this.setState({
          isHidden: !this.state.isHidden
      })
    }
    
    render() {
        return (
            <div>
            
            <button type="button" onClick={this.showForm}>Add a new dish!</button>
            {this.state.isHidden ?
               <form onSubmit={this.handleFormSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)}/>

                    <label>Calories:</label>
                    <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)} />

                    <label></label>
                    <input type="text" name="image" value={this.state.image} onChange={(e) => this.handleChange(e)} />

                    <input type="submit" value="Submit"/>
               </form>   
               : false}
            </div>
        )
    }
}

export default AddFood
