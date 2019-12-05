import {DELIVERY_ENUM} from '../../Shared/Utils/InputEnum';
import {DeliveryInterface} from '../../Shared/Interfaces/delivery.interface';

const initialState: DeliveryInterface = {
  support_address: null,
  deposit_address: null,
  supported: null,
  recipient: null,
  express: true,
  deposit_availability_start: null,
  deposit_availability_end: null,
  quantity: 1,
  options: [],
};

function delivery(state = initialState, action) {
  let nextState: any = initialState;
  switch (action.type) {
    case DELIVERY_ENUM.SET_INFOS:
      nextState = action.value;
      return nextState || state;
    default:
      return state;
  }
}

export default delivery;
