import React, { Component} from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }

  render () {
    return (<section id="filter">
      <div className="inside">
        <h4>Filter</h4>
        <select name ="neighborhood" className="filters neighborhood" onChange={this.props.change}>
          <option value="Ridgewood">Ridgewood</option>
          <option value="Miami">Miami</option>
        </select>
        <select name ="housetype" className="filters housetype" onChange={this.props.change}>
          <option value="Ranch">Ranch</option>
          <option value="Apartment">Apartment</option>
          <option value="Studio">Studio</option>
          <option value="Room">Room</option>
        </select>
        <select name ="bedrooms" className="filters bedrooms" onChange={this.props.change}>
          <option value="1">2 BR</option>
          <option value="2">2 BR</option>
          <option value="3">2 BR</option>
          <option value="4">2 BR</option>
          <option value="5">2 BR</option>
          <option value="6">2 BR</option>
        </select>
        <div className="filters price">
          <span className="title">Price</span>
          <input placeholder="min" type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price}/>
          <input placeholder="max" type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price}/>
        </div>
        <div className="filters floor-space">
          <span className="title">Floor Space</span>
          <input placeholder="min" type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.change} value={this.props.globalState.min_floor_space}/>
          <input placeholder="max" type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.change} value={this.props.globalState.max_floor_space}/>
        </div>
        <div className="filters extras">
          <label htmlFor="extras">
            <span>Elevators</span>
            <input name="elevator" value="elevator" type="checkbox" onChange={this.props.change}/>
          </label>
          <label htmlFor="extras">
            <span>Swimming Pool</span>
            <input name="swimming_pool" value="swimming-pool" type="checkbox" onChange={this.props.change}/>
          </label>
          <label htmlFor="extras">
            <span>Finished Basement</span>
            <input name="finished_basement" value="finished basement" type="checkbox" onChange={this.props.change}/>
          </label>
          <label htmlFor="extras">
            <span>Gym</span>
            <input name="gym" value="gym" type="checkbox" onChange={this.props.change}/>
          </label>
        </div>
      </div>

    </section>)
  }
}
