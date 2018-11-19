import React, {Component} from "react";
import {connect} from "react-redux";

import {crimeTypesActions} from "../../state/ducks/crimeTypes";
import Filter from "./filter";
import "./index.css";

class FilterList extends Component {
  componentDidMount() {
    this.props.crimeTypesFetch();
  }

  render() {
    const {crimeTypes} = this.props;
    return (
      <div className="FilterList">
        <fieldset className="FilterList__fieldset">
          <legend>Choose your legend</legend>
          {crimeTypes.map(item => (
            <Filter key={item._id} name={item.name} id={item._id} />
          ))}
        </fieldset>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    crimeTypesFetch: () => dispatch(crimeTypesActions.fetchRequest())
  };
};

const mapStateToProps = state => {
  return {
    crimeTypes: state.crimeTypesStore.crimeTypes,
    coordinates: state.mapStore.coordinates
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterList);
