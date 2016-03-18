/* eslint no-unused-vars: 0 */
declare module uuid {
  declare function v4(): string;
}

declare module 'lodash/defaults' {
  declare function exports(obj1: Object, obj2: Object): Object;
}

declare module 'lodash/each' {
  declare function exports(obj1: Object, func: Function): void;
}

declare module 'lodash/pick' {
  declare function exports(obj1: Object, pickableParams: Array<string>): Object;
}

export type callbackStruct = {
  onStatus: Function,
  onPresence: Function,
  onMessage: Function
}