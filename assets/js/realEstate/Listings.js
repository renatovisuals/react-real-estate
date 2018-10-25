import React, { Component} from 'react'


export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
    this.loopListings = this.loopListings.bind(this);
  }

  loopListings(){
    var {listingsData} = this.props

    return listingsData.map((listing, index)=>{
      return (<div className="col-md-3" key={index}>
        <div className="listing" >
          <div className="listing-img" style={{background: `url("${listing.image}") no-repeat center center`}}>
            <span className="address">{listing.address}</span>
            <div className="bottom-gradient"></div>
            <div className="details">
              <div className="user-img"> </div>
              <div className="user-details">
                <div className="detail-wrapper">
                  <span className="user-name">Nina Smith</span>
                  <span className="post-date">05/05/2018</span>
                </div>
              </div>
              <div className="listing-details">
                <div className="floor-space">
                  <i className="fa fa-arrows-alt"></i>
                  <span>1000ft&sup2;</span>
                  <div className="bedrooms">
                    <i className="fa fa-bed"></i>
                    <span>{listing.rooms} bedrooms</span>
                  </div>
                  <button className="view-btn">view listing</button>
                </div>
              </div>
              </div>
            </div>
          <div className="bottom-info">
            <span className="price">${listing.price}</span>
            <span className="location"> <i className="fa fa-map-marker"></i> {listing.city},{" "}{listing.state} </span>
          </div>
        </div>
      </div>)
    })
  }

  render () {
    return (<section id="listings" className="listings">
      <section className="search-area">
        <input type="text" name="search" />
      </section>

      <section className="sortby-area">
        <div className="results"> 390 results found </div>
        <div className ="sort-options">
          <select name="sortby" className="sortby">
            <option value = "price-asc">Highest Price</option>
            <option value = "price-asc">Highest Price</option>
          </select>
        <div className = "view">
          <i className="fa fa-list-ul"></i>
          <i className="fa fa-th"></i>
        </div>

        </div>
      </section>

      <section className="listings-results">
        {this.loopListings()}
      </section>




      <section id="pagination">
        <ul className="pages">
          <li>Prev</li>
          <li>1</li>
          <li className="active">2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>Next</li>
        </ul>

      </section>
    </section>)
  }
}
