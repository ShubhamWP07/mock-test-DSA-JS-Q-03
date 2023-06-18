
function mySqrt(x) {
  if (x === 0 || x === 1) {
    return x;
  }

  let left = 0;
  let right = x;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return right;
}
