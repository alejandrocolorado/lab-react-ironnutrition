import 'bulma/css/bulma.css';

import React from 'react'

export default class FoodBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
    }

    handleNumberChange = (e) => {
        let currentNumber = e.target.value
        
        this.setState({
            quantity: currentNumber
        })
    }
    
render () {
    return (
            <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.image} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.name}</strong> <br />
                  <small>{this.props.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value={this.state.quantity} onChange={this.handleNumberChange}/>
                </div>
                <div className="control">
                  <button className="button is-info" >+</button>
                </div>
              </div>
            </div>
          </article>
        </div>
    )
}
}

