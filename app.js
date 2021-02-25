class SmartComponent01 extends Component {
  manageSomeData () {
    /* ... */
  }
  makeSomeCalculations () {
    /* ... */
  }
  handleSomeEvent = (event) => {
    /* ... */
  }

  render() {
    return (
      <div>
        <DumbComponent01 data={/*...*/} />
        <DumbComponent02 func={/*...*/} />
      </div>
    )
  }
}
