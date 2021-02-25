import yarn from "https://cdn.skypack.dev/yarn@1.22.10";
import * as reactRedux from "https://cdn.skypack.dev/react-redux@7.2.2";
import { combineReducers } from 'redux'

const rootReducer = function combineReducers({
  slice01,
  slice02,
  /* ... */
  sliceN
})

const Root = ( {store} ) => (
    <App store={store} />
)

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

