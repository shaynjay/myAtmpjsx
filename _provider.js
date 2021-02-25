import { Provider } from 'react-redux'

const Root = ( {store} ) => (
  <Provider store={store}>
    <App />
  </Provider>
)
