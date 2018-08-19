import React, {Component} from "react";
import { connect } from "react-redux";
import { filterAdd, filterRemove } from "../../redux/actions/filterActions";
import {crimeFetchRequest} from "../../redux/actions/crimeActions";
class Filter extends Component {

  handleChange = (e) => {
    const {id,name} = e.target;
    const {lat,lng} = this.props.coordinates; 
    if(e.target.checked) {
      this.props.filterAdd(name,id)
    } else {
      this.props.filterRemove(id);
    }

    const types = Array.from(this.props.filters.keys())
    this.props.crimeFetch(lng,lat,types)
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
    filterAdd: (name,id) => dispatch(filterAdd(name,id)),
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