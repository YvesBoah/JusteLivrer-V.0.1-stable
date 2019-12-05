import {DeliveryInterface} from '../Interfaces/delivery.interface';
import {DELIVERY_FORM} from '../Utils/InputEnum';

export default class ValidatorService {
  constructor() {}

  validatorDeliveryForm(delivery: DeliveryInterface): boolean {
    let etat = true;
    Object.keys(delivery).map((objectKey, index) => {
      if (objectKey === DELIVERY_FORM.OPTIONS) {
        Object.keys(delivery[objectKey]).map((optionKey, index) => {
          Object.keys(delivery[objectKey][optionKey]).map(
            (sousOptionKey, index) => {
              if (
                !this.validateInputNoBlank(
                  delivery[objectKey][optionKey][sousOptionKey],
                )
              ) {
                etat = false;
              }
            },
          );
        });
      } else {
        if (!this.validateInputNoBlank(delivery[objectKey])) {
          etat = false;
        }
      }
    });
    return etat;
  }

  validateInputNoBlank(input: any): boolean {
    if (input !== '' && input !== 'null' && input !== null) {
      return true;
    }
    return false;
  }
}
