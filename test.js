var intersection = function (nums1, nums2) {
  const st1 = new Set(nums1);
  const st2 = new Set(nums2);
  const res = [];

  for (let val of st2) {
    if (st1.has(val)) {
      res.push(val);
    }
  }
  return res;
};

console.log(intersection((nums1 = [1, 2, 2, 1]), (nums2 = [2, 2])));
console.log(intersection((nums1 = [4, 9, 5]), (nums2 = [9, 4, 9, 8, 4])));
