import devices from "../lib/devices";
import displays from "../lib/displays";
import { findWhere, result } from "lodash";

export default class iosResolutions {
  constructor() {

  }

  static property({key = 'id', value, requestedValue = 'displayId'}) {
    const device = result(findWhere(devices, {[key]: value}), requestedValue);
    return requestedValue === 'displayId' ? this.getDisplay({id: device}) : device;
  }

  static getDisplay({id, property}) {
    const display = findWhere(displays, {id: id});
    return property ? result(display, property) : display;
  }
};
