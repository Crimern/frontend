import reducer from "./reducers";

import * as crimeTypesActions from "./actions";
import crimeTypesSaga from "./sagas"

export {
  crimeTypesActions,
  crimeTypesSaga
}

export default reducer;