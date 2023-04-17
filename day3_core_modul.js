const path  =  require("path");
console.log(path.basename(__filename));
// Output ---- >  day3_core_modul.js
console.log(__filename);
// Output ---> /home/mahendran/mahendran/project/Node-js/day3_core_modul.js

// Add the File Path

const dirUpload = path.join(__dirname, "www", "files", "uploads");
console.log(dirUpload);
// Output ---> /home/mahendran/mahendran/project/Node-js/www/files/uploads


const util =  require("util");       //File details collect'

util.log(dirUpload);
// 17 Apr 09:15:29 - /home/mahendran/mahendran/project/Node-js/www/files/uploads

util.log(path.basename(__filename));
// Output ---> 17 Apr 09:14:00 - day3_core_modul.js


// V8 how much memory our App using
const v8 =  require("v8");

util.log(v8.getHeapStatistics())
/* Output ---->
17 Apr 09:19:21 - {
  total_heap_size: 5341184,
  total_heap_size_executable: 524288,
  total_physical_size: 4881184,
  total_available_size: 2193566296,
  used_heap_size: 4116496,
  heap_size_limit: 2197815296,
  malloced_memory: 254096,
  peak_malloced_memory: 453184,
  does_zap_garbage: 0,
  number_of_native_contexts: 1,
  number_of_detached_contexts: 0,
  total_global_handles_size: 8192,
  used_global_handles_size: 3424,
  external_memory: 1477602
}
*/