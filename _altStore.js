let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(logger, timeoutScheduler),
    middlewareFromAnExtension()
  )
)
