//LAYOUT CUSTOMIZATION
var currentWeek   = 1;                        // current week [releases content fully visible up to this week]
var activityNum   = 8;                         // number of activities per week (empty slots possible)
var columnNum     = 4;                         // desired columns per week (yet, autofitted to max 2 rows per week)
var title         = "FUNCTIONAL PROGRAMMING";  // content title (different to unitName since multiple content streams maybe in one unit)
var headerOn      = 1;                         // table column headers on(=1) or off(=0), min of 4 columns needed to render
var header1       = "Synchronous Sessions";    // leftmost 1x column header
var header2       = "Asynchronous Materials";  // middle 2x column header
var header3       = "Coursework &amp; Labs";  // rest of the columns header
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
["0", "Lecture",             "#CCCFFF","0","Slides",    "Code",     ],
["1", "Teams Session",       "#DDE3FC","1","Slides",    "Code",     ],
["2", "Teams Q&amp;A",       "#CCDFFF","1","",          "",              ],
["3", "Teams Lab",           "#EEDFCF","1","",          "Materials",              ],
["4", "Exercises",           "#D8CCFF","1","","Code",          ],
["5", "Prep Task",           "#DDDDDD","1","",          "",              ],
["6", "Formative Coursework","#EEEEDD","1","",          "Materials",     ],
["7", "Summative Coursework","#EEEEDD","1","",          "Materials",     ],
["8",  "",                   "#EEEEDD","0","",          "",              ], // multi-week coursework
["9",  "",                   "#CCCCCC","0","",          "",              ], // empty slot
["10", "",                   "#CCCCCC","0","",          "",              ], // multi-week empty
["11", "Teams Setup Lab",    "#E0CFCF","1","",          "",              ],
["12", "No Lab this Week",   "#CCCCCC","0","",          "",              ], // week off
["13", "Notes ft. <br> Extra Examples <br> + Explanations",      "#94e5bf","0","",          "Notes",         ],
["14", "Q&A",                "#94e5bf","0","",          "",              ],
["15", "Lecture",            "#CCCFFF","0","Slides",    "",     ],
["16", "<br/><div align='center' style='color:#777777'>LECTURE-FREE WEEK</div>",   "#CCCCCC","0","",          "",              ], // empty slot
["17", "Bonus Bounty",       "#EEEEDD","1","",    "Materials",     ],
["18", "Lecture",             "#CCCFFF","0","",    "Code",     ],
["19", "Sample Exam questions",             "#CCCFFF","0","",    "Materials",     ],
];

var activities = [
//WEEKLY ACTIVITIES
//CATEGORY NUM, DATE|TIME, ACTIVITY TITLE, ACTIVITY URL, SLIDES URL, MATERIAL START, MATERIAL RANGE

//WEEK 01
["9", "",                   "",                                "", "", "0", "1"],
["5", "in your own time",   "GET YOUR PC READY",               "http://people.cs.bris.ac.uk/~burghard/setup/index.html", "", "0", "0"],
["5", "in your own time",   "GET STARTED WITH HASKELL",        "https://mediasite.bris.ac.uk/Mediasite/Play/ed9419f3296a4b5c9c37398b077563481d", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "1"],
["9", "",                   "",                                "", "", "0", "1"],
["9", "",                   "",                                "", "", "0", "1"],
["9", "",                   "",                                "", "", "0", "1"],
["9", "",                   "",                                "", "", "0", "1"],
//WEEK 02
["1",  "12/10/20 | 04:30pm", "Organisation", "https://teams.microsoft.com/l/meetup-join/19%3a77ce564b4bc243f280777bcb2842a9c4%40thread.tacv2/1601742740341?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%229858a91d-80ab-4cbc-81ee-a630d01eb6f2%22%7d", "functional/org.pptx", "0", "0"],
["15", "in your own time",   "Introduction", "https://mediasite.bris.ac.uk/Mediasite/Play/7aebc67b88544693a67bd13e75063ec61d", "functional/intro.pptx",    "0", "0"],
["0",  "in your own time",   "Datatypes",    "https://mediasite.bris.ac.uk/Mediasite/Play/f608c6f1ea994e68a580d048f51e16c11d", "functional/datatypes.pptx", "0", "1"],
["12", "",                   "",             "", "", "0", "0"],
["9",  "",                   "",             "", "", "0", "1"],
["0",  "in your own time",   "Functions",    "https://mediasite.bris.ac.uk/Mediasite/Play/30f33a32f25f424981cc78f36fa2de7b1d", "functional/functions.pptx", "1", "1"],
["13", "in your own time",   "",             "", "", "9", "5"],
["12", "",                   "",             "", "", "0", "0"],
//WEEK 03
["14", "19/10/20 | 04:30pm", "Q&A",            "https://teams.microsoft.com/l/meetup-join/19%3a77ce564b4bc243f280777bcb2842a9c4%40thread.tacv2/1602847522866?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22ebaf26f0-1612-4422-b9ad-e7a9c03f1358%22%7d", "", "0", "0"],
["15", "in your own time",   "Evaluation",     "https://mediasite.bris.ac.uk/Mediasite/Play/414c3f30ea7640128553df9124ca84091d", "functional/evaluation.pptx", "0", "0"],
["15", "in your own time",   "Currying",       "https://mediasite.bris.ac.uk/Mediasite/Play/52ceaba7371a483aa9b60df27fdb35991d", "functional/currying.pptx", "0", "0"],
["3",  "22/10/20 | 03:00pm", "SHEET ONE",      "https://teams.microsoft.com/l/team/19%3a77ce564b4bc243f280777bcb2842a9c4%40thread.tacv2/conversations?groupId=007c9238-1db7-4d79-84e0-3ef797092b64&tenantId=b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b", "", "14", "2"],
["9",  "",                   "",               "", "", "0", "1"],
["15", "in your own time",   "Case and Recursion",       "https://mediasite.bris.ac.uk/Mediasite/Play/056c02fa85cc4f4290edbf8f2a8ae36c1d", "functional/case&recursion.pptx", "0", "0"],
["13", "in your own time",   "",                                "", "", "16", "3"],
["9",  "",                   "",           "", "", "", ""],
//WEEK 04
["14", "26/10/20 | 04:30pm", "Q&A",                    "https://teams.microsoft.com/l/meetup-join/19%3a77ce564b4bc243f280777bcb2842a9c4%40thread.tacv2/1603360057605?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22ebaf26f0-1612-4422-b9ad-e7a9c03f1358%22%7d", "", "0", "0"],
["0", "in your own time",   "Modelling&Datatypes",       "https://mediasite.bris.ac.uk/Mediasite/Play/b1707b1a799d441980f7d6f349a261d91d", "functional/modelling&datatypes.pptx", "2", "1"],
["0", "in your own time",   "Pattern Matching",       "https://mediasite.bris.ac.uk/Mediasite/Play/649bb5f1efc14f589866d27d91faf5fc1d", "functional/pattern matching.pptx", "2", "1"],
["3", "29/10/20 | 03:00pm",                   "SHEET TWO",                                "", "", "19", "2"],
["9", "",                   "",                                "", "", "0", "1"],
["0", "in your own time",   "Recursive Datatypes",       "https://mediasite.bris.ac.uk/Mediasite/Play/dd1ad32f76084b35a99cbd7673ac371c1d", "functional/recursive datatypes.pptx", "2", "1"],
["13", "in your own time",                   "",                                "", "", "21", "1"],
["9", "",                   "",                                "", "", "0", "1"],
//WEEK 05
["14", "02/11/20 | 04:30pm", "Q&A",                    "https://teams.microsoft.com/l/meetup-join/19%3a77ce564b4bc243f280777bcb2842a9c4%40thread.tacv2/1603360057605?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22ebaf26f0-1612-4422-b9ad-e7a9c03f1358%22%7d", "", "0", "0"],
["15", "view by 09/11/20",   "Lists",       "https://mediasite.bris.ac.uk/Mediasite/Play/6a4a3816dc0c40f3bb7aec6b05de2b091d", "functional/lists.zip", "2", "1"],
["0", "view by 09/11/20",   "Functions on lists",       "https://mediasite.bris.ac.uk/Mediasite/Play/df8d5226ad3145b683f32590d1f859511d", "functional/functions on lists.zip", "3", "1"],
["3", "05/11/20 | 03:00pm",                   "SHEET THREE",                                "", "", "22", "2"],
["9", "",                   "",                                "", "", "0", "1"],
["9", "",                   "",                                "", "", "0", "1"],
["13", "in your own time", "",           "", "", "24", "2"],
["9", "",                   "",                                "", "", "0", "1"],
//WEEK 06
["14", "09/11/20 | 04:30pm", "Q&A",                         "https://teams.microsoft.com/l/meetup-join/19%3a77ce564b4bc243f280777bcb2842a9c4%40thread.tacv2/1603360057605?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22ebaf26f0-1612-4422-b9ad-e7a9c03f1358%22%7d", "", "0", "0"],
["15", "view by 16/11/20",   "HO function",                 "https://mediasite.bris.ac.uk/Mediasite/Play/fcbf2a224b344ccf9a6a31629ee699741d", "functional/HO function.zip", "", ""],
["0",  "view by 16/11/20",   "foldr",                       "https://mediasite.bris.ac.uk/Mediasite/Play/02ba4aefcd214153bbfc9840f7776c871d", "functional/foldr.zip", "4", "1"],
["3",  "12/11/20 | 03:00pm", "SHEET FOUR",                  "", "", "26", "2"],
["9",  "",                   "",                            "", "", "0", "1"],
["0",  "view by 16/11/20",   "More HO functions",           "https://mediasite.bris.ac.uk/Mediasite/Play/919dfd46f7bb4812856b31e803608ebe1d", "functional/more HO functions.zip", "4", "1"],
["13", "in your own time",   "",                            "", "", "37", "5"],
["17", "(optional)",         "Structural Inductive Proofs", "", "", "42", "3"],
//WEEK 07
["14", "16/11/20 | 04:30pm", "Q&A",                         "https://teams.microsoft.com/l/meetup-join/19%3a77ce564b4bc243f280777bcb2842a9c4%40thread.tacv2/1603360057605?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22ebaf26f0-1612-4422-b9ad-e7a9c03f1358%22%7d", "", "0", "0"],
["16","",                   "",           "", ""],
["16","",                   "",           "", ""],
["3", "19/11/20 | 03:00pm", "SHEET FIVE", "", "", "28", "2"],
["9", "",                   "",           "", "", "0", "1"],
["10","",                   "",           "", ""],
["10","",                   "",           "", ""],
["17", "(optional)",        "Sudoku",     "", "", "46", "1"],
//WEEK 08
["14", "23/11/20 | 04:30pm", "Q&A",                         "https://teams.microsoft.com/l/meetup-join/19%3a77ce564b4bc243f280777bcb2842a9c4%40thread.tacv2/1603360057605?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22ebaf26f0-1612-4422-b9ad-e7a9c03f1358%22%7d", "", "0", "0"],
["15", "view by 30/11/20",   "Design w. HO functions",                 "https://mediasite.bris.ac.uk/Mediasite/Play/2a7c3b77e49b4f24b61a707fca1d53e91d", "functional/design w HO.zip", "", ""],
["15", "view by 30/11/20",   "Type classes",                 "https://mediasite.bris.ac.uk/Mediasite/Play/b56703cfd8484e3e9d36e1980515da711d", "functional/type classes.zip", "", ""],
["3", "26/11/20 | 03:00pm", "SHEET FIVE",                  "", "", "28", "2"],
["9", "",                   "",                            "", "", "0",  "1"],
["9", "",                   "",                            "", "", "0",  "1"],
["13", "in your own time",  "",                            "", "", "47", "2"],
["17", "(optional)",        "Monoids",                     "", "", "49", "3"],
//WEEK 09
["14", "30/11/20 | 04:30pm", "Q&A",                         "https://teams.microsoft.com/l/meetup-join/19%3a77ce564b4bc243f280777bcb2842a9c4%40thread.tacv2/1603360057605?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22ebaf26f0-1612-4422-b9ad-e7a9c03f1358%22%7d", "", "0", "0"],
["0",  "view by 07/12/20",   "IO",                       "https://mediasite.bris.ac.uk/Mediasite/Play/3cd46d621c9f412b83426dd5fbc25e021d", "functional/IO.zip", "5", "1"],
["15", "view by 07/12/20",   "QC Generator",                 "https://mediasite.bris.ac.uk/Mediasite/Play/d916544af76e4f20a1638fb20b6c96971d", "functional/QC Generator.zip", "", ""],
//["15", "view by 7/12/20",   "IO",                 "", "", "", ""],
//["15", "view by 7/12/20",   "QC Generator",                 "", "", "", ""],
["3", "03/12/20 | 03:00pm", "SHEET SIX",                       "", "", "30", "4"],
["9", "",                   "",                                "", "", "0",  "1"],
["9", "",                   "",                                "", "", "0",  "1"],
["13", "in your own time",  "",                                "", "", "52",  "2"],
["17", "(optional)",        "Tetris",                          "", "", "54", "1"],
//WEEK 10
["14", "07/12/20 | 04:30pm", "Q&A",                         "https://teams.microsoft.com/l/meetup-join/19%3a77ce564b4bc243f280777bcb2842a9c4%40thread.tacv2/1603360057605?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22ebaf26f0-1612-4422-b9ad-e7a9c03f1358%22%7d", "", "0", "0"],
["18", "view by 14/12/20","Trees","https://mediasite.bris.ac.uk/Mediasite/Play/b3fcbbfaf52a4ea0a850d131b088c8ac1d", "", "69",  "1"],
["18", "view by 14/12/20","Words in a Novel","https://mediasite.bris.ac.uk/Mediasite/Play/3ac8c04df60b443597c1d82eebfbf8d91d", "", "70",  "1"],
["3", "10/12/20 | 03:00pm", "SHEET SEVEN",                     "", "", "34", "3"],
["9", "",                   "",                                "", "", "0",  "1"],
["18", "view by 14/12/20","Arithmetical Expressions","https://mediasite.bris.ac.uk/Mediasite/Play/07d9b659879b4d7289eb13130f68b4191d", "", "71",  "1"],
["13", "in your own time",  "",                                "", "", "65",  "1"],
["17", "(optional)",        "Data.Map and Tries",              "", "", "55", "7"],
//WEEK 11
["14", "14/12/20 | 04:30pm", "Q&A",                         "https://teams.microsoft.com/l/meetup-join/19%3a77ce564b4bc243f280777bcb2842a9c4%40thread.tacv2/1603360057605?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22ebaf26f0-1612-4422-b9ad-e7a9c03f1358%22%7d", "", "0", "0"],
["18", "",                   "Reasoning about Programs I", "https://mediasite.bris.ac.uk/Mediasite/Play/dd2ddc538cdd411aac7c91aea80a13291d", "", "72", "1"],
["18", "",                   "Reasoning about Programs II", "https://mediasite.bris.ac.uk/Mediasite/Play/d0025ea23ae14c22ac01c4b0b76f1b241d", "", "73", "1"],
["3", "17/12/20 | 03:00pm", "SHEET EIGHT",                     "", "", "62", "3"],
["19", "", "Sample exam questions",                         "", "", "74", "2"],
["9", "",                   "",                                "", "", "0", "1"],
["9", "",                   "",                                "", "", "0", "1"],
["17", "(optional)",        "Sheet of Death",                  "", "", "66", "3"],
//WEEK 12
["9",  "",                   "",                            "", "", "0", "1"],
["9",  "",                   "",                            "", "", "0", "1"],
["9",  "",                   "",                            "", "", "0", "1"],
["3",  "14/01/21",           "Revision",                    "", "", "0", "0"],
["9",  "",                   "",                            "", "", "0", "1"],
["9",  "",                   "",                            "", "", "0", "1"],
["9",  "",                   "",                            "", "", "0", "1"],
["9",  "",                   "",                            "", "", "0", "1"],
];

//UNIT RESOURCES & MATERIALS
var files = [
[  "0", "functional/day.hs",           "day.hs"],
[  "1", "functional/functions.hs",             "functions.hs"],
[  "2", "functional/card.hs",             "card.hs"],
[  "3", "functional/lists.hs",          "lists.hs"],
[  "4", "functional/HO.hs",         "HO.hs"],
[  "5", "functional/ExampleIO.hs",       "ExampleIO.hs"],
[  "6", "minimum.c",           "minimum.c"],
[  "7", "nexthailstone.c",     "nexthailstone.c"],
[  "8", "grade.c",             "grade.c"],
[  "9", "functional/Notes/Types.pdf", "Types"],
[  "10", "functional/Notes/HaskellPoDs.pdf", "Haskell PoDs"],
[  "11", "functional/Notes/DataConstructors.pdf", "Data Constructors"],
[  "12", "functional/Notes/Tuples.pdf", "Tuples"],
[  "13", "functional/Notes/FunctionComposition.pdf", "Function Composition"],
[  "14", "functional/sheets/sheet01.pdf", "Sheet One"],
[  "15", "functional/sheets/answer01.pdf", "Sheet One - Answers"],
[  "16", "functional/Notes/Branching.pdf", "Branching"],
[  "17", "functional/Notes/Guards.pdf", "Guards"],
[  "18", "functional/Notes/Laziness.pdf", "Laziness"],
[  "19", "functional/sheets/sheet02.pdf", "Sheet Two"],
[  "20", "functional/sheets/answer02.pdf", "Sheet Two - Answers"],
[  "21", "functional/Notes/PatternMatching.pdf", "PatternMatching"],
[  "22", "functional/sheets/sheet03.pdf", "Sheet Three"],
[  "23", "functional/sheets/answer03.pdf", "Sheet Three - Answers"],
[  "24", "functional/Notes/Lists.pdf", "Lists"],
[  "25", "functional/Notes/Maybe.pdf", "Maybe"],
[  "26", "functional/sheets/sheet04.pdf", "Sheet Four"],
[  "27", "functional/sheets/answer04.pdf", "Sheet Four - Answers"],
[  "28", "functional/sheets/sheet05.pdf", "Sheet Five"],
[  "29", "functional/sheets/answer05.pdf", "Sheet Five - Answers"],
[  "30", "functional/sheets/sheet06.pdf", "Sheet Six"],
[  "31", "functional/sheets/answer06.pdf", "Sheet Six - Answers"],
[  "32", "functional/sheets/prevWeeksCode.zip", "Previous Week's Code"],
[  "33", "functional/sheets/code06.hs", "Code 6"],
[  "34", "functional/sheets/sheet07.pdf", "Sheet Seven"],
[  "35", "functional/sheets/answer07.pdf", "Sheet Seven - Answers"],
[  "36", "functional/sheets/code07.hs", "Code 7"],
[  "37", "functional/Notes/UniversalQuantification.pdf", "UniversalQuantification"],
[  "38", "functional/Notes/HigherOrderFunctions.pdf", "Higher Order Functions"],
[  "39", "functional/Notes/Map.pdf", "Map"],
[  "40", "functional/Notes/Folds.pdf", "Folds"],
[  "41", "functional/Notes/RecordSyntax.pdf", "Record Syntax"],
[  "42", "functional/sheets/sheetBonus1.pdf", "Bonus Sheet One"],
[  "43", "functional/Notes/StructuralInductiveProofs.pdf", "Structural Inductive Proofs"],
[  "44", "functional/sheets/answerBonus1.pdf", "Bonus Sheet One - Answers"],
[  "45", "functional/COMINGSOON.txt", "COMING SOON"],
[  "46", "functional/sheets/Sudoku.zip", "Sudoku"],
[  "47", "functional/Notes/ListComprehensions.pdf", "List Comprehensions"],
[  "48", "functional/Notes/TypeClasses.pdf", "Type Classes"],
[  "49", "functional/sheets/sheetBonus2.pdf", "Bonus Sheet Two"],
[  "50", "functional/Notes/Monoids.pdf", "Monoids"],
[  "51", "functional/sheets/answerBonus2.pdf", "Bonus Sheet Two - Answers"],
[  "52", "functional/Notes/FunctionRecipe.pdf", "Recipe for Writing Functions"],
[  "53", "functional/Notes/PreludeFunctionsCheatsheet.pdf", "Functions Cheatsheet"],
[  "54", "functional/sheets/Tetris.zip", "Tetris"],
[  "55", "functional/sheets/sheetBonus3.pdf", "Bonus Sheet Three"],
[  "56", "functional/Notes/Kinds.pdf", "Kinds"],
[  "57", "functional/Notes/DataMap.pdf", "Map"],
[  "58", "functional/Notes/Trie.pdf", "Trie"],
[  "59", "functional/sheets/answerBonus3.pdf", "Bonus Sheet Three - Answers"],
[  "60", "functional/sheets/PrevWeeksCodeBonus.zip", "Previous Week's Code"],
[  "61", "functional/sheets/codeBonus3.hs", "Bonus Code 3"],
[  "62", "functional/sheets/sheet08.pdf", "Sheet Eight"],
[  "63", "functional/sheets/answer08.pdf", "Sheet Eight - Answers"],
[  "64", "functional/sheets/code08.hs", "Code 8"],
[  "65", "functional/Notes/Trees.pdf", "Trees"],
[  "66", "functional/sheets/sheetBonus4.pdf", "Bonus Sheet Four"],
[  "67", "functional/sheets/answerBonus4.pdf", "Bonus Sheet Four - Answers"],
[  "68", "functional/sheets/codeBonus4.hs", "Bonus Code 4"],
[  "69", "functional/BinaryTrees.hs", "BinaryTrees.hs"],
[  "70", "functional/Austen.hs", "Austen.hs"],
[  "71", "functional/Eval.hs", "Eval.hs"],
[  "72", "functional/ReasoningI.lhs", "ReasoningI.hs"],
[  "73", "functional/ReasoningII.lhs", "ReasoningII.hs"],
[  "74", "functional/Sample.pdf", "Sample.pdf"],
[  "75", "https://www.ole.bris.ac.uk/webapps/blackboard/content/listContentEditable.jsp?content_id=_5106854_1&course_id=_222169_1&mode=reset&courseTocLabel=Bristol+Quiz+%28exams+practice%29", "Exam Format Demo"],
];
