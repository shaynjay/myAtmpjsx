function mapStateToProps(state) {
  return {
    // component gets this.props.selection1
    selection1: getSelection1(state.slice01),
    // component gets this.props.selection2   
    selection2: getSelection2(state.slice01)
  }
}
