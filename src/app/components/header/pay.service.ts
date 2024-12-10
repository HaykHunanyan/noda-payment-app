import { PAY_INS, PAY_OUTS } from "./header-data.constants";
import { Item } from "./pay-item.interface";

export class PayService {
    getPayIns():Item[] {
        return PAY_INS;
    }
    getPayOuts(): Item[]{
        return PAY_OUTS;
    }
}

export default PayService;