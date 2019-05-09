
export const CHECK_ITEM = 'CHECK_ITEM';
export const AGAIN_BUTTON = 'AGAIN_BUTTON';


export function checkItemAC(index) {
  return {
    type: CHECK_ITEM,
    index
  };
}

export function againAC() {
  return {
    type: AGAIN_BUTTON
  };
}