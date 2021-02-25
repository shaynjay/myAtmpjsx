const DO_SOMETHING = 'DO_SOMETHING'

// an action object
{
  type: DO_SOMETHING,
  payload: relevantData
}

let payload =
  {
    id,
    something
  }
  
  function do_something(payload) {
  return (
    {
      type: DO_SOMETHING,
      payload
    }
  )
}
