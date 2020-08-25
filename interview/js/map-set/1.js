const algorithm = { site: "leetcode" };
console.log(algorithm.site); // leetcode

for (const key in algorithm) {
  console.log(key, algorithm[key]);
}

// site leetcode
delete algorithm.site;
console.log(algorithm.site); // undefined
