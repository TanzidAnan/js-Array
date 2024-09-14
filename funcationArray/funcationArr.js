const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});

colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']