export const fetchRequest = () => ({
  type: "CRIME_TYPE_FETCH_REQUEST"
})


export const fetchSuccess = data => ({
  type: "CRIME_TYPE_FETCH_SUCCESS",
  data
})

export const fetchFail = error => ({
  type: "CRIME_TYPE_FETCH_FAIL",
  error
})

