import React, {Component} from "react";
import { connect } from "react-redux";
import {crimesActions} from "../../state/ducks/crimes";
import {filtersActions} from "../../state/ducks/filters";

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
    filterAdd: (name,id) => dispatch(filtersActions.filterAdd(name,id)),
    filterRemove: (id) => dispatch(filtersActions.filterRemove(id)),
    crimeFetch: (lng,lat,types) => {
      dispatch(crimesActions.fetchRequest(lng,lat,types));
    },
  };
};

const mapStateToProps = state => {
  return {
    coordinates: state.mapStore.coordinates,
    filters: state.filtersStore.filters
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter)