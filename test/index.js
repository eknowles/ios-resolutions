import test from "tape"
import iosResolutions from "../src"

test('iPhone', (assert) => {
  const deviceId = 'iPhone1,1';
  const display = iosResolutions.property({key: 'id', value: deviceId});
  const displayName = iosResolutions.property({key: 'id', value: deviceId, requestedValue: 'name'});
  assert.equal(display.width, 320, displayName + ' ' + deviceId + ' should have a width of 320');
  assert.equal(display.height, 480, displayName + ' ' + deviceId + ' should have a height of 480');
  assert.end();
});
