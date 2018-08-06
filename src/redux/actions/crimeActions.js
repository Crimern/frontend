export const crimeFetchRequest = (lng,lat) => ({
  type: "CRIME_FETCH_REQUEST",
  payload: {lng,lat}
})

export const crimeFetchSuccess = data => ({
  type: "CRIME_FETCH_SUCCESS",
  data
})

export const crimeFetchFail = error => ({
  type: "CRIME_FETCH_FAIL",
  error
})

