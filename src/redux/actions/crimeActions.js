export const crimeFetchRequest = (lng,lat,types) => ({
  type: "CRIME_FETCH_REQUEST",
  payload: {lng,lat,types}
})

export const crimeFetchSuccess = data => ({
  type: "CRIME_FETCH_SUCCESS",
  data
})

export const crimeFetchFail = error => ({
  type: "CRIME_FETCH_FAIL",
  error
})

