const arg = process.argv[2];
const num = parseint(arg);
if (!Isnan(num)) {
  console.log('My number: ' + num);
} else {
  console.log('Not a number');
}
