import { toggleEntityProperty } from '../../utils';

export const VEHICLE_ACTIONS = {
  TOGGLE_SELECTED: 'TOGGLE_SELECTED'
};

export const vehicleReducer = (state, action) => {
  switch (action.type) {
    case VEHICLE_ACTIONS.TOGGLE_SELECTED:
      const vehicle = action.selected;
      const selected = toggleEntityProperty(state.selected, vehicle.id, vehicle);

      return {
        ...state,
        selected
      };
      
    default:
      return state;
  }
}
