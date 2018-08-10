import React, {Component} from "react";
import { connect } from "react-redux";
import { filterAdd, filterRemove } from "../../redux/actions/filterActions";

class Filter extends Component {

  handleChange = (e) => {
    const {id,name} = e.target;
    if(e.target.checked) {
      this.props.filterAdd({id,name})
    } else {
      this.props.filterRemove(id)
    }
  }
  render() {
    const {name,id,filterAdd,filterRemove} = this.props;

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
    filterRemove: (id) => dispatch(filterRemove(id))
  };
};

const mapStateToProps = state => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter)