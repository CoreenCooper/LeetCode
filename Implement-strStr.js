//// Two Pointers ////

//// While Loop ////
const strStr = function (haystack, needle) {
  let l = 0;
  let r = needle.length;

  if (!needle) {
    return 0;
  } else {
    while (l < haystack.length - needle.length + 1) {
      let substring = haystack.substring(l, r);
      if (substring === needle) {
        return l;
      }
      l++;
      r++;
    }
  }
  return -1;
};


/// For Loop ////
// const strStr = function (haystack, needle) {
//   let r = needle.length;

//   if (!needle) {
//     return 0;
//   } else {
//     for (let l = 0; l < haystack.length - needle.length + 1; l++) {
//       let substring = haystack.substring(l, r);
//       if (substring === needle) {
//         return l;
//       }
//       r++;
//     }
//   }
//   return -1;
// };
