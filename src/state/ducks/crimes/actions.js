export const fetchRequest = (lng, lat, types) => ({
  type: "CRIME_FETCH_REQUEST",
  payload: {
    lng,
    lat,
    types
  }
})

export const fetchSuccess = data => ({
  type: "CRIME_FETCH_SUCCESS",
  data
})

export const fetchFail = error => ({
  type: "CRIME_FETCH_FAIL",
  error
})

export default {
  fetchRequest,
  fetchSuccess,
  fetchFail
}