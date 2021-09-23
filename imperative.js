//LAYOUT CUSTOMIZATION
var currentWeek   = 1;                         // current week [releases content fully visible up to this week]
var activityNum   = 8;                         // number of activities per week (empty slots possible)
var columnNum     = 4;                         // desired columns per week (yet, autofitted to max 2 rows per week)
var title         = "IMPERATIVE PROGRAMMING";  // content title (different to unitName since multiple content streams maybe in one unit)
var headerOn      = 1;                         // table column headers on(=1) or off(=0), min of 4 columns needed to render
var header1       = "Synchronous Sessions";    // leftmost 1x column header
var header2       = "Asynchronous Materials";  // middle 2x column header
var header3       = "Coursework &amp; Labs";   // rest of the columns header
var inactColour   = "#999999";                 // font colour for inactive content
var titleColour   = "#777777";                 // table title colour
var titleBColour  = "#BBBBBB";                 // table title background colour
var bkgColour     = "#CCCCCC";                 // table border background colour
var embossColour  = "#AAAAAA";                 // table border emboss colour
var fontSizePix   = 11;                        // font size in pixels
var extendCatNum1 = 8;                         // number of one category that has no border to above cell (e.g. for multi-week coursework)
var extendCatNum2 = 10;                        // number of one category that has no border to above cell (e.g. for multi-week empty)

//ACTIVITY CATEGORIES (up to 35 allowed)
//CATEGORY NUM, CATEGORY TITLE, COLOUR, COUNTER?, SLIDES LINK, MATERIAL LINK
var categories = [
["0", "Lecture",             "#CCCFFF","1","Slides",    "Code",          ],
["1", "Live Session",        "#DDE3FC","0","Slides",    "Info",     ],
["2", "Teams Q&amp;A",       "#CCDFFF","1","Slides",    "Code",          ],
["3", "Hybrid Lab",          "#EEDFCF","1","",          "",              ],
["4", "Optional Exercises",  "#D8CCFF","1","",          "Sample Solutions",],
["5", "PrepTask",            "#DDDDDD","1","",          "",              ],
["6", "Formative Coursework","#EEEEDD","1","",          "Materials",     ],
["7", "Summative Coursework","#EEEEDD","1","",          "Materials",     ],
["8",  "",                   "#EEEEDD","0","",          "",              ], // multi-week coursework
["9",  "",                   "#CCCCCC","0","",          "",              ], // empty slot
["10", "",                   "#CCCCCC","0","",          "",              ], // multi-week empty
["11", "Setup Lab",          "#E0CFCF","0","",          "",              ],
["12", "<br/><div align='center' style='color:#777777'>LECTURE-FREE WEEK</div>",   "#CCCCCC","0","",          "",              ], // empty slot
["13", "Teams Session",       "#DDE3FC","0","",    "",     ],
["14", "Teams Q&amp;A",       "#CCDFFF","0","",    "",     ],
["15", "<br/><div align='center' style='color:#777777'>REDUCED LECTURE LOAD</div>",   "#CCCCCC","0","",          "",              ], // empty slot
];

//WEEKLY ACTIVITIES
//CATEGORY NUM, DATE|TIME, ACTIVITY TITLE, ACTIVITY URL, SLIDES URL, MATERIAL START, MATERIAL RANGE
var activities = [

//WEEK 01
["1", "Tue 28/09/21<br/>03:00pm<br/>CHEM LT1", "WELCOME &amp INTRODUCTION",  "", "imperative/week01/COMS10016_Welcome.pdf", "21", "4"],
["5", "in your own time",   "GET YOUR PC READY",               "http://people.cs.bris.ac.uk/~burghard/setup/index.html", "", "0", "0"],
["5", "in your own time",   "THE LINUX TUTORIAL",              "https://seis.bristol.ac.uk/~sh1670/LinTut.pdf", "", "0", "0"],
["11","Wed 29/09/21<br/>10:00am<br/>MVB2.11", "Join Session",                "", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["5", "in your own time",   "UNDERSTAND UNIT MARKING",         "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/imperative/week01/marking.html", "", "0", "0"],
["5", "in your own time",   "KNOW ABOUT PLAGIARISM",           "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/content/imperative/week01/plagiarism.html", "", "0", "0"],
["11","Wed 29/09/21<br/>11:30am<br/>MVB2.11", "Join Session",    "", "", "0", "0"],

//WEEK 02 - WRITING SIMPLE C PROGRAMS
["1", "Tue 05/10/21  | 3pm<br/>CHEM LT1 + Teams", "PROGRAMS &amp; COMPUTATION",      "", "imperative/week02/COMS10016_Computing.pdf", "29", "2"],
["0", "watch before Wed",     "PROCEDURES &amp; PROGRAMS",       "https://mediasite.bris.ac.uk/Mediasite/Play/91d05240456c424a922dd1c8db97569d1d", "imperative/COMS10016_01.pdf", "0", "2"],
["0", "watch before Wed",     "TYPES, VARIABLES &amp; SCOPE",    "https://mediasite.bris.ac.uk/Mediasite/Play/0015df077d4d4287892c1e7563a68da71d", "imperative/COMS10016_02.pdf", "2", "4"],
["3", "Wed 06/10/20 | 10am",  "BIG INTEGER CHALLENGE",           "", "", "0", "0"],
["9", "",                     "",                                "", "", "0", "0"],
["0", "watch before Wed",     "DECISIONS &amp; RECURSION",       "https://mediasite.bris.ac.uk/Mediasite/Play/142dc3fec056475caa68332b17666b701d", "imperative/COMS10016_03.pdf", "6", "5"],
["4", "in your own time",   "HAIL &amp; THUNDER",                "imperative/COMS10016_Task01.pdf", "", "11", "2"],
["6", "during weekly labs", "BIG INTEGER CHALLENGE",             "imperative/week02/index.html", "", "13", "8"],
 
//WEEK 03 - HANDLING RECURSION, LOOPS AND ARRAYS
["1", "", "ITERATION &amp; CO.",             "", "imperative/week03/COMS10016_Loops.pdf", "50", "2"],
["0", "in your own time",   "LITERALS, ENUMS &amp; CONSTANTS", "https://mediasite.bris.ac.uk/Mediasite/Play/87f3017862004a37ae1ac8b3fbdab33a1d", "imperative/COMS10016_04.pdf", "31", "2"],
["0", "in your own time",   "LOOPS &amp; JUMPS",               "https://mediasite.bris.ac.uk/Mediasite/Play/ecad33ee4d3f4d6889d4a0993c8c64fc1d", "imperative/COMS10016_05.pdf", "33", "2"],
["3", "", "GRADE CHALLENGE",                                   "", "", "0", "0"],
["2", "", "LOOPS, ARRAYS, STRINGS",                            "", "imperative/week03/COMS10016_LoopsArraysStrings.pdf", "69", "4"],
["0", "in your own time",   "ARRAYS",                          "https://mediasite.bris.ac.uk/Mediasite/Play/6fc2ef02c0cf4c14946695028ed6d8921d", "imperative/COMS10016_06.pdf", "35", "3"],
["0", "in your own time",   "STRINGS",                         "https://mediasite.bris.ac.uk/Mediasite/Play/d034f70b96754765acbe77fe15ff966b1d", "imperative/COMS10016_07.pdf", "37", "6"],
["6", "during weekly labs", "GRADE CHALLENGE",                 "imperative/week03/index.html", "", "25", "4"],

//WEEK 04 - UNDERSTANDING STRINGS AND SEARCH
["1", "26/10/20 | 04:00pm", "SEARCH &amp; CO.",                "", "imperative/week04/COMS10016_Search.pdf", "52", "1"],
["0", "in your own time",   "SEARCHING",                       "https://mediasite.bris.ac.uk/Mediasite/Play/ead7ce2e083945a380347d8bd0559ac01d", "imperative/COMS10016_08.pdf", "43", "1"],
["0", "in your own time",   "RUNTIME COMPLEXITY",              "https://mediasite.bris.ac.uk/Mediasite/Play/27eebe8e4c7c496ea8431bb5a7aaf7b21d", "imperative/COMS10016_09.pdf", "43", "1"],
["3", "28/10/20 | 10:30am", "TRIANGLE CHALLENGE 1/2",          "", "", "0", "0"],
["2", "28/10/20 | 10:00am", "SEARCH &amp; COMPLEXITY",         "", "imperative/week04/COMS10016_SearchComplexity.pdf", "43", "1"],
["4", "in your own time",   "THE TOWERS OF HANOI",             "imperative/COMS10016_Task02.pdf", "", "48", "2"],
["4", "in your own time",   "PRIME SUSPECT",                   "imperative/COMS10016_Task03.pdf", "", "53", "1"],
["6", "during weekly labs", "TRIANGLE CHALLENGE<br/><a target='_blank' href='imperative/week04/sample/triangle.c'>(Triangle Sample Solution)</a><br/><a target='_blank' href='imperative/week04/sample/strings.c'>(Strings Sample Solution)</a>",              "imperative/week04/index.html", "", "44", "4"],

//WEEK 05 - WORKING WITH POINTERS
["1", "02/11/20 | 04:00pm", "STRINGS &amp; POINTERS",          "", "imperative/week05/COMS10016_StringsPointers.pdf", "61", "4"],
["0", "in your own time",   "BITS",                            "https://mediasite.bris.ac.uk/Mediasite/Play/a3533af3bc4e4fc0906e5ca4f2133dcf1d", "imperative/COMS10016_10.pdf", "56", "1"],
["0", "in your own time",   "POINTERS",                        "https://mediasite.bris.ac.uk/Mediasite/Play/388e5402b8404f5d8dc76f2115f16cb31d", "imperative/COMS10016_11.pdf", "57", "2"],
["8", "",                   "",        "", ""],
["2", "04/11/20 | 10:00am", "MEMORY",                          "", "imperative/week05/COMS10016_Memory.pdf", "73", "6"],
["0", "in your own time",   "STRUCTURES &amp; USER TYPES",     "https://mediasite.bris.ac.uk/Mediasite/Play/7d3fe970d51b4ce69c1de4f69a99629a1d", "imperative/COMS10016_12.pdf", "59", "2"],
["4", "in your own time",   "BITS &amp; POINTERS",             "imperative/COMS10016_Task04.pdf", "", "54", "2"],
["3", "04/11/20 | 10:30am", "TRIANGLE CHALLENGE 2/2",          "", "", "0", "0"],

//WEEK 06 - HANDLING DATA STRUCTURES
["1", "09/11/20 | 04:00pm", "COURSEWORK INTRO",                "", "imperative/week06/COMS10016_CourseworkIntro.pdf", "90", "1"],
["0", "in your own time",   "DYNAMIC DATA",                    "https://mediasite.bris.ac.uk/Mediasite/Play/b3e7616c4a134cb692a0fc4644aaddf51d", "imperative/COMS10016_13.pdf", "81", "5"],
["0", "in your own time",   "STACKS",                          "https://mediasite.bris.ac.uk/Mediasite/Play/dc1d983afb4e47a98548bf55cfad60271d", "imperative/COMS10016_14.pdf", "79", "2"],
["3", "11/11/20 | 10:30am", "LIST CHALLENGE 1/2",              "", "", "0", "0"],
["2", "11/11/20 | 10:00am", "DATA &amp; POINTERS",             "", "imperative/week06/COMS10016_DataPointers.pdf", "89", "2"],
["0", "in your own time",   "LISTS",                           "https://mediasite.bris.ac.uk/Mediasite/Play/a8ba8ec547f44e7c8d0e8f59addad7801d", "imperative/COMS10016_15.pdf", "86", "2"],
["4", "in your own time",   "CELLULAR",                        "imperative/COMS10016_Task05.pdf", "", "88", "1"],
["7", "during labs and in your own time", "LIST CHALLENGE",    "", "", "91", "3"], 

//WEEK 07 - WORKING WITH POINTERS
["1", "16/11/20 | 04:00pm", "STACK RECAP",                     "", "", "80", "1"], 
["12","",                   "",        "", ""],
["12","",                   "",        "", ""],
["8", "",                   "",        "", ""],
["2", "18/11/20 | 10:00am", "COURSEWORK",                      "", "", "80", "1"],
["10", "",                  "",        "", ""],
["10", "",                  "",        "", ""],
["3", "18/11/20 | 10:30am", "LIST CHALLENGE 2/2",              "", "", "0", "0"],

//WEEK 08 - DYNAMIC DATA STRUCTURES
["1", "23/11/20 | 04:00pm", "ARRAYS &amp; SORTING",            "", "imperative/week08/COMS10016_SortingArrays.pdf", "104", "2"],
["0", "view by 25/11/20",   "TREES",                           "https://mediasite.bris.ac.uk/Mediasite/Play/ba910510d107433b8ef0b94b1e92d2d81d", "imperative/COMS10016_16.pdf", "94", "1"],
["0", "view by 25/11/20",   "SORTING",                         "https://mediasite.bris.ac.uk/Mediasite/Play/ab93766ee4b64918925dd1d8e18f8e111d", "imperative/COMS10016_17.pdf", "105", "1"],
["3", "25/11/20 | 10:30am", "TEXT CHALLENGE 1/1",              "", "", "0", "0"],
["2", "25/11/20 | 10:00am", "ARRAYS &amp; POINTERS",           "", "imperative/week08/COMS10016_ArraysPointers.pdf", "103", "1"],
["0", "view by 25/11/20",   "FUNCTION POINTERS",               "https://mediasite.bris.ac.uk/Mediasite/Play/434d2a8c7d8940c5ada2244ed17243bb1d", "imperative/COMS10016_18.pdf", "101", "3"],
["4", "in your own time",   "BUBBLE SORT",                     "imperative/COMS10016_Task06.pdf", "", "95", "1"],
["6", "during weekly labs and in your own time", "TEXT CHALLENGE<br/><a target='_blank' href='imperative/week08/sample/text.c'>(Text Sample Solution)</a><br/><a target='_blank' href='imperative/week08/sample/bits.c'>(Bits Sample Solution)</a>", "imperative/week08/index.html", "", "96", "4"],

//WEEK 09 - FILES, GRAPHICS AND MULTI-MODULE PROGRAMS
["1", "30/11/20 | 04:00pm", "FUNCTION POINTERS &amp; CALLBACKS", "", "imperative/week09/COMS10016_FPointersCallbacks.pdf", "130", "3"],
["0", "view by 02/12/20",   "INPUT &amp; OUTPUT",              "https://mediasite.bris.ac.uk/Mediasite/Play/5d0479bdadf5499a8c252f4911f5883f1d", "imperative/COMS10016_19.pdf", "121", "9"],
["0", "view by 02/12/20",   "MODULES",                         "https://mediasite.bris.ac.uk/Mediasite/Play/2b6abb9643bb40d5a6b4b0b1e42deef11d", "imperative/COMS10016_20.pdf", "113", "8"],
["3", "02/12/20 | 10:30am", "GRAPHICS CHALLENGE 1/1",          "", "", "0", "0"],
["2", "02/12/20 | 10:00am", "MULTI-MODULE PROGRAMS",           "", "imperative/week09/COMS10016_MultiModule.pdf", "132", "1"],
["0", "view by 02/12/20",   "PREPROCESSOR",                    "https://mediasite.bris.ac.uk/Mediasite/Play/554d0dcf701a44eca46968749456ee851d", "imperative/COMS10016_21.pdf", "112", "1"],
["0", "view by 02/12/20",   "DESIGN",                          "https://mediasite.bris.ac.uk/Mediasite/Play/f205eea1d0014aa286f0bf98d613ee5f1d", "imperative/COMS10016_22.pdf", "112", "1"],
["6", "during weekly labs and in your own time", "GRAPHICS CHALLENGE", "imperative/week09/index.html", "", "107", "6"],

//WEEK 10 - STARTING TO UNDERSTAND CORRECTNESS AND FINAL COURSEWORK
["1", "07/12/20 | 04:00pm", "SKETCH CHALLENGE INTRO",          "", "imperative/week10/COMS10016_Sketch.pdf", "133", "1"],
["0", "optional, view anytime", "LIBRARIES",                   "https://mediasite.bris.ac.uk/Mediasite/Play/3d51c01de15c41ad8a6492b99775bb981d", "imperative/COMS10016_23.pdf", "108", "3"],
["15", "",                   "",        "", ""],
["3", "09/12/20 | 10:30am", "SKETCH CHALLENGE 1/2",            "", "", "0", "3"],
["14", "09/12/20 | 10:00am", "SKETCH CHALLENGE",               "", "", "0", "0"],
["0", "optional, view anytime", "ADVANCED CONCEPTS",           "https://mediasite.bris.ac.uk/Mediasite/Play/ff1c3ff560064ad0b8101bbe6cb2c90d1d", "imperative/COMS10016_24.pdf", "152", "7"],
["10", "",                   "",        "", ""],
["7", "during labs and in your own time", "SKETCH CHALLENGE",    "", "", "133", "19"], 


//WEEK 11 - ADVANCED CONCEPTS AND FINAL COURSEWORK SUBMISSION
["13", "14/12/20 | 04:00pm", "SUMMARY",                        "", "", "0", "0"],
["9", "", "",                   "", "", "0", "0"],
["10", "",                   "",        "", ""],
["8", "",                   "",        "", ""],
["14", "16/12/20 | 10:00am", "SKETCH CHALLENGE",               "", "", "0", "0"],
["10", "",                   "",        "",  ""],
["10", "",                   "",        "", ""],
["3", "16/12/20 | 10:30am", "SKETCH CHALLENGE 2/2",            "", "", "0", "0"],

//WEEL 12 - filler
["9",  "",                   "",                            "", "", "0", "1"],
["9",  "",                   "",                            "", "", "0", "1"],
["9",  "",                   "",                            "", "", "0", "1"],
["9",  "",                   "",                            "", "", "0", "1"],
["10",  "",                   "",                            "", "", "0", "1"],
["10",  "",                   "",                            "", "", "0", "1"],
["10",  "",                   "",                            "", "", "0", "1"],
["10",  "",                   "",                            "", "", "0", "1"],
];

//UNIT RESOURCES & MATERIALS
var files = [
[  "0", "imperative/minimal.c",                 "minimal.c"],
[  "1", "imperative/hello.c",                   "hello.c"],
[  "2", "imperative/paint.c",                   "paint.c"],
[  "3", "imperative/paintvar.c",                "paintvar.c"],
[  "4", "imperative/fullpaint.c",               "fullpaint.c"],
[  "5", "imperative/doublepaint.c",             "doublepaint.c"],
[  "6", "imperative/minimum.c",                 "minimum.c"],
[  "7", "imperative/nexthailstone.c",           "nexthailstone.c"],
[  "8", "imperative/grade.c",                   "grade.c"],
[  "9", "imperative/trianglenum.c",             "trianglenum.c"],
[ "10", "imperative/hailstone.c",               "hailstone.c"],
[ "11", "imperative/factorial.c",               "factorial.c"],
[ "12", "imperative/collatz.c",                 "collatz.c"],
[ "13", "imperative/week02/COMS10016_Linux.pdf","Linux Commands"],
[ "14", "imperative/week02/COMS10016_Make.pdf", "Make Basics"],
[ "15", "imperative/week01/style.html",         "C Style Guide"],
[ "16", "imperative/hello.c",                   "hello.c"],
[ "17", "imperative/Makefile",                  "Makefile"],
[ "18", "imperative/fullpaint.c",               "fullpaint.c"],
[ "19", "imperative/doublepaint.c",             "doublepaint.c"],
[ "20", "imperative/trianglenum.c",             "trianglenum.c"],
[ "21", "https://research-information.bris.ac.uk/en/persons/tilo-burghardt", "Website of Tilo"],
[ "22", "https://research-information.bris.ac.uk/en/persons/sion-l-hannuna", "Website of Sion"],
[ "23", "https://research-information.bris.ac.uk/en/persons/meng-wang",      "Website of Meng"],
[ "24", "https://research-information.bris.ac.uk/en/persons/peter-d-bennett","Website of Pete"],
[ "25", "imperative/week03/grade.c",             "grade.c"],
[ "26", "imperative/week03/Makefile",            "Improved Makefile"],
[ "27", "imperative/week01/marking.html",        "Marking Guide"],
[ "28", "imperative/week01/style.html",          "C Style Guide"],
[ "29", "https://academic.oup.com/mind/article/LIX/236/433/986238",          "Computing Machinery and Intelligence"],
[ "30", "imperative/week02/COMS10016_GoldenRules.pdf",          "Golden Rules"],
[ "31", "imperative/grade.c",                    "grade.c"],
[ "32", "imperative/constgrade.c",               "constgrade.c"],
[ "33", "imperative/countdown.c",                "countdown.c"],
[ "34", "imperative/root.c",                     "root.c"],
[ "35", "imperative/segfault.c",                 "segfault.c"],
[ "36", "imperative/avg.c",                      "avg.c"],
[ "37", "imperative/matrix.c",                   "matrix.c"],
[ "38", "imperative/args.c",                     "args.c"],
[ "39", "imperative/compare.c",                  "compare.c"],
[ "40", "imperative/copy.c",                     "copy.c"],
[ "41", "imperative/join.c",                     "join.c"],
[ "42", "imperative/sprint.c",                   "sprint.c"],
[ "43", "imperative/search.c",                   "search.c"],
[ "44", "imperative/week04/triangle.c",          "triangle.c"],
[ "45", "imperative/week04/Makefile",            "Makefile (triangle)"],
[ "46", "imperative/week04/strings.c",           "strings.c"],
[ "47", "imperative/week04/strings/Makefile",    "Makefile (strings)"],
[ "48", "imperative/fibonacci.c",                "fibonacci.c"],
[ "49", "imperative/hanoi.c",                    "hanoi.c"],
[ "50", "https://en.wikipedia.org/wiki/ASCII",   "ASCII Code"],
[ "51", "https://en.wikipedia.org/wiki/UTF-8",   "UTF-8 Code"],
[ "52", "https://en.wikipedia.org/wiki/Big_O_notation",   "Big O Notation"],
[ "53", "imperative/primes.c",                    "primes.c"],
[ "54", "imperative/arraymem.c",                  "arraymem.c"],
[ "55", "imperative/ring.c",                      "ring.c"],
[ "56", "imperative/pack.c",                      "pack.c"],
[ "57", "imperative/pointer.c",                   "pointer.c"],
[ "58", "imperative/args.c",                      "args.c"],
[ "59", "imperative/structs.c",                   "structs.c"],
[ "60", "imperative/word.c",                      "word.c"],
[ "61", "imperative/palindrome.c",                "palindrome.c"],
[ "62", "imperative/value.c",                     "value.c"],
[ "63", "imperative/rangama.c",                   "rangama.c"],
[ "64", "imperative/caesar.c",                    "caesar.c"],
[ "65", "imperative/minimal.c",                   "minimal.c"],
[ "66", "imperative/paint.c",                     "paint.c"],
[ "67", "imperative/doublepaint.c",               "doublepaint.c"],
[ "68", "imperative/trianglenum.c",               "trianglenum.c"],
[ "69", "imperative/constgrade.c",                "constgrade.c"],
[ "70", "imperative/root.c",                      "root.c"],
[ "71", "imperative/avg.c",                       "avg.c"],
[ "72", "imperative/sprint.c",                    "sprint.c"],
[ "73", "imperative/letters.c",                   "letters.c"],
[ "74", "imperative/bitcount.c",                  "bitcount.c"],
[ "75", "imperative/bitseq.c",                    "bitseq.c"],
[ "76", "imperative/stack.c",                     "stack.c"],
[ "77", "imperative/pointer.c",                   "pointer.c"],
[ "78", "imperative/pack.c",                      "pack.c"],
[ "79", "imperative/stacksimple.c",               "stacksimple.c"],
[ "80", "imperative/linkedlist.c",                "linkedlist.c"],
[ "81", "imperative/stack.c",                     "stack.c"],
[ "82", "imperative/heap.c",                      "heap.c"],
[ "83", "imperative/malloc.c",                    "malloc.c"],
[ "84", "imperative/items.c",                     "items.c"],
[ "85", "imperative/flexfields.c",                "flexfields.c"],
[ "86", "imperative/linkedlist.c",                "linkedlist.c"],
[ "87", "imperative/arraylist.c",                 "arraylist.c"],
[ "88", "imperative/110.c",                       "110.c"],
[ "89", "imperative/stringcmp.c",                 "stringcmp.c"],
[ "90", "imperative/linkedlist.c",                "linkedlist.c"],
[ "91", "imperative/week06/list.c",               "list.c"],
[ "92", "imperative/week06/list.h",               "list.h"],
[ "93", "imperative/week06/Makefile",             "Makefile"],
[ "94", "imperative/tree.c",                      "tree.c"],
[ "95", "imperative/bubble.c",                    "bubble.c"],
[ "96", "imperative/week08/text.c",               "text.c"],
[ "97", "imperative/week08/Makefile",             "Makefile (text)"],
[ "98", "imperative/week08/text.h",               "text.h"],
[ "99", "imperative/week08/bits.c",               "bits.c"],
[ "100","imperative/sort.c",                      "sort.c"],
[ "101","imperative/qsort.c",                     "qsort.c"],
[ "102","imperative/fparray.c",                   "fparray.c"],
[ "103","imperative/parray.c",                    "parray.c"],
[ "104","imperative/arraylist.c",                 "arraylist.c"],
[ "105","imperative/sort.c",                      "sort.c"],
[ "106","imperative/week08/COMS10016_SortVisualisation.pdf", "Sorting Visualisations"],
[ "107","imperative/week09/hellosdl.c",           "hellosdl.c"],
[ "108","imperative/week09/hellodisplay.c",       "hellodisplay.c"],
[ "109","imperative/display.h",                   "display.h"],
[ "110","imperative/display.c",                   "display.c"],
[ "111","imperative/week09/fractal.c",            "fractal.c"],
[ "112","imperative/week09/maze.zip",             "Emerald Maze Game"],
[ "113","imperative/program.c",                   "program.c"],
[ "114","imperative/main0.c",                     "main0.c"],
[ "115","imperative/print0.c",                    "print0.c"],
[ "116","imperative/main.c",                      "main.c"],
[ "117","imperative/print.c",                     "print.c"],
[ "118","imperative/print.h",                     "print.h"],
[ "119","imperative/storagea.c",                  "storagea.c"],
[ "120","imperative/storageb.c",                  "storageb.c"],
[ "121","imperative/codes.c",                     "codes.c"],
[ "122","imperative/bytes.c",                     "bytes.c"],
[ "123","imperative/upper.c",                     "upper.c"],
[ "124","imperative/lines.c",                     "lines.c"],
[ "125","imperative/type.c",                      "type.c"],
[ "126","imperative/phone.c",                     "phone.c"],
[ "127","imperative/hist.c",                      "hist.c"],
[ "128","imperative/records.c",                   "records.c"],
[ "129","imperative/pgm.c",                       "pgm.c"],
[ "130","imperative/fparray.c",                   "fparray.c"],
[ "131","imperative/week09/hellodisplay.c",       "hellodisplay.c"],
[ "132","imperative/week09/maze.zip",             "Emerald Maze Game"],
[ "133","imperative/week10/sketch.zip",           "All Files as Zip"],
[ "134","imperative/week10/displayfull.h",        "displayfull.h"],
[ "135","imperative/week10/displayfull.c",        "displayfull.c"],
[ "135","imperative/week10/sketch.h",             "sketch.h"],
[ "136","imperative/week10/sketch.c",             "sketch.c"],
[ "137","imperative/week10/test.c",               "test.c"],
[ "138","imperative/week10/Makefile",             "Makefile"],
[ "139","imperative/week10/sketch00.sk",          "sketch00.sk"],
[ "140","imperative/week10/sketch01.sk",          "sketch01.sk"],
[ "141","imperative/week10/sketch02.sk",          "sketch02.sk"],
[ "142","imperative/week10/sketch03.sk",          "sketch03.sk"],
[ "143","imperative/week10/sketch04.sk",          "sketch04.sk"],
[ "144","imperative/week10/sketch05.sk",          "sketch05.sk"],
[ "145","imperative/week10/sketch06.sk",          "sketch06.sk"],
[ "146","imperative/week10/sketch07.sk",          "sketch07.sk"],
[ "147","imperative/week10/sketch08.sk",          "sketch08.sk"],
[ "148","imperative/week10/sketch09.sk",          "sketch09.sk"],
[ "149","imperative/week10/bands.pgm",            "bands.pgm"],
[ "150","imperative/week10/fractal.pgm",          "fractal.pgm"],
[ "151","imperative/varargs.c",                   "varargs.c"],
[ "152","imperative/union.c",                     "union.c"],
[ "153","imperative/bitfields.c",                 "bitfields.c"],
[ "154","imperative/asm.c",                       "asm.c"],
[ "155","imperative/signals.c",                   "signals.c"],
[ "156","imperative/catchsignal.c",               "catchsignal.c"],
[ "157","imperative/volatile.c",                  "volatile.c"],
];
