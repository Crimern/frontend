import React, { Component } from "react";
import { connect } from "react-redux";

import {crimeTypeFetchRequest} from '../../redux/actions/crimeTypeActions'
import Filter from "./filter";

class FilterList extends Component {
  componentDidMount() {
    this.props.crimeTypesFetch()
  }

  render() {
    const { crimeTypes } = this.props;
    return (
      <div>
        <fieldset>
        <legend>Choose your legend</legend>
        {crimeTypes.map(item => <Filter key={item._id} name={item.name} id={item._id} />)}
        </fieldset>

      </div>
    )
  }
}



const mapDispatchToProps = dispatch => {
  return {
    crimeTypesFetch: () => dispatch(crimeTypeFetchRequest())
  };
};

const mapStateToProps = state => {
  return {
    crimeTypes: state.crimeTypeStore.crimeTypes,
    coordinates: state.mapStore.coordinates
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterList)