export const filterAdd = (name,id) => ({
  type: "FILTER_ADD",
  payload: {
    name,
    id
  }
})

export const filterRemove = id => ({
  type: "FILTER_REMOVE",
  payload: {
    id
  }
})



