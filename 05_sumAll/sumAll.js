const sumAll = function (start, end) {
  if (typeof start !== "number" || typeof end !== "number") return "ERROR";
  if (start < 0 || end < 0) return "ERROR";

  if (start > end) {
    const tempStart = start;
    start = end;
    end = tempStart;
  }

  let num = 0;
  for (i = start; i <= end; i++) {
    num += i;
  }
  return num;
};

// Do not edit below this line
module.exports = sumAll;
