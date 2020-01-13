/* 
 * Initialize the counter property of the function object.
 * Function declarations are hoised so we really can 
 * dor this assignment before the function declaration.
*/

uniqueInteger.counter = 0;

/* 
 * This function returns a different integer each time it is called
 * It uses a propertu of itself to remember the next balue to be returned.
*/

function uniqueInteger(){
  return uniqueInteger.counter++; //? incemenet and return counter property.
}

// ! Compute factorials and cache results as properties of the function itself. 
function factorial(n){
  if(isFinite(n) && n>0 && n == Math.round(n)){
    if(!(n in factorial)){
      factorial[n] = n * factorial(n-1);
    }
    return factorial[n];
  }
  else return NaN;
}

factorial[1] = 1;

console.log(uniqueInteger());
console.log(uniqueInteger());
console.log(uniqueInteger());
console.log(uniqueInteger());



console.log(factorial(4));
console.log(factorial);

/* 
 প্রথম কথা হলো, এই গ্রুপে সবার মতামত কে সমান ভাবে প্রাধান্য দেওয়া হবে, কেউ নেতা নাই এখানে, সবাই সমান এবং ভাই ভাই। কাজেই নিজের কোনো মতামত প্রকাশ করতে কেউ দ্বিধাবোধ করবেন না। 

আমরা কিছু মেম্বার / স্বেচ্ছাসেবক নিয়োগ দিবো, যারা নিয়মিত সুন্নী ওলামাগণের ওয়াজ শুনে থাকেন এবং সুন্নী টিউব বিডি এর ভিডিও গুলো নিজেদের টাইমলাইনে বা সুন্নী আকীদার গ্রুপ গুলোতে পোস্ট করতে পারবেন। আমাদের মূল টার্গেট সুন্নী টিউব বিডি চ্যানেল টিকে দাড় করানো।

মেম্বারদের কাজঃ 
১) সুন্নী আকিদা ভিত্তিক কোনো তথ্যবহুল ভিডিও যদি আপনাদের নজরে পড়ে বা কোনো সুন্নী ওয়াজ বা না'তে রাসূল এসব যদি আপনারা দেখে থাকেন সেগুলোর লিঙ্ক আমাদের গ্রুপে পোস্ট করবেন। তবে এক্ষেত্রে শর্ত হলো ঐ ভিডিওতে যাতে 
  কোনো মিডিয়ার লোগো (যেমনঃ আজমীর রেকর্ডিং) খচিত না থাকে।

২) কোনো ওয়াজের মধ্যে দলীল ভিত্তিক বা তথ্যবহুল অংশ থাকলে সে ওয়াজ এর লিঙ্ক দিয়ে কত মিনিট থেকে কত মিনিট পর্যন্ত অংশে সেটি আছে তা উল্লেখ করে দিবেন দয়া করে। 

৩) চ্যানেল এর  ইম্প্রুভ মেন্ট এর জন্য কোনো সাজেশন থাকলে তাও জানাতে ভুলবেননা।

*/