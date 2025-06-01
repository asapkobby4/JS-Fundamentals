const arg = process.argv[2];
const num = parseint(arg);

if (Isnan(num)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + num);
}
