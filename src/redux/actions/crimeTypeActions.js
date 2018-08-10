export const crimeTypeFetchRequest = () => ({
  type: "CRIME_TYPE_FETCH_REQUEST"
})


export const crimeTypeFetchSuccess = data => ({
  type: "CRIME_TYPE_FETCH_SUCCESS",
  data
})

export const crimeTypeFetchFail = error => ({
  type: "CRIME_TYPE_FETCH_FAIL",
  error
})

