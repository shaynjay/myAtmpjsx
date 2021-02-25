import {connect} from 'react-redux'

function mapStateToProps(state) {
  return {
    // component gets this.props.slice01
    slice01: state.slice01     
  }
}

// export without a new name
export default connect(mapStateToProps)(SmartComponent01)
