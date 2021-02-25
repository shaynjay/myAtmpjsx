function mapDispatchToProps(dispatch) {
  return {
    /* your own bindings for the dispatch() function */
  }
}

export default connect(mapStateToProps,
                       mapDispatchToProps)(SmartComponent01)
