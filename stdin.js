console.log("work test");

process.stdin.setEncoding("utf8");
//

// process.stdin.on("data", (data) => {
//   console.log(data, "이게 입력인가");
//   process.exit();
// });

console.log(process.env.ALLUSERSPROFILE);
