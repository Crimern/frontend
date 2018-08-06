export const crimeFetchRequest = (x,y) => ({
  type: "CRIME_FETCH_REQUEST",
  payload: {x,y}
})

export const crimeFetchSuccess = data => ({
  type: "CRIME_FETCH_SUCCESS",
  data
})

export const crimeFetchFail = error => ({
  type: "CRIME_FETCH_FAIL",
  error
})

