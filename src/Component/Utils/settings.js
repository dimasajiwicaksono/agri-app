export function isMobileView () {
  const widthWindow = global.window.innerWidth
  if( widthWindow < 768 ) {
    return true;
  } else {
    return false;
  }
}




export const settings = {
  isMobileView
}