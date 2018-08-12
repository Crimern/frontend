import React, {Component} from "react";
import { connect } from "react-redux";
import { filterAdd, filterRemove } from "../../redux/actions/filterActions";
import {crimeFetchRequest} from "../../redux/actions/crimeActions";
class Filter extends Component {

  handleChange = (e) => {
    const {id,name} = e.target;
    const {coordinates} = this.props; 
    if(e.target.checked) {
      this.props.filterAdd({id,name})
    } else {
      this.props.filterRemove(id);
    }

    const types = Array.from(this.props.filters.keys())
    this.props.crimeFetch(coordinates.lng,coordinates.lat,types)
  }
  render() {
    const {name,id} = this.props;

    return (
      <div>
        <input type="checkbox" id={id} onChange={this.handleChange} name={name}
          value={name} />
        <label htmlFor={id}>{name}</label>
      </div>)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterAdd: (filter) => dispatch(filterAdd(filter)),
    filterRemove: (id) => dispatch(filterRemove(id)),
    crimeFetch: (lng,lat,types) => {
      dispatch(crimeFetchRequest(lng,lat,types));
    },
  };
};

const mapStateToProps = state => {
  return {
    coordinates: state.mapStore.coordinates,
    filters: state.filterStore.filters
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter)