const fs = require("fs");
let files = fs.readdirSync("./");
console.log(files)
/* Output
[
    '.git',
    'README.md',
    'day1_currentDirc_path_module.js',
    'day1_process_object.js',
    'day1_stdout_stdin.js',
    'day2_Reporting_process_setInterval.js',
    'day2_delay_with_setTimeout.js',
    'day2_using_stdOutlist.js',
    'day3_collecing_info_inreadLine.js',
    'day3_core_modul.js',
    'day4_custom_events.js',
    'day4_export_custom_module.js',
    'day4_import_module.js',
    'day5_list_files.js'
  ]

  */