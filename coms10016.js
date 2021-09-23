//UNIT DETAILS
var unitName      = "Imperative and Functional Programming";
var unitCode      = "COMS10016";
var startWeekNum  = 1;                         // start week number [usual start is week 1 or 13]
var totalWeeks    = 2;                        // total teaching weeks for unit [usually 12]

//PAGE TITLE CONTENT (IF ANY)
var topicsNum = 13; // num of topics to render in title, that is 1 plus max index, -1 for no topics
var topics = [
[  "0", "0", "OVERVIEW",               "<strong>Unit Overview.</strong> This first year introductory unit is worth 20 credit points and assumes no prior exposure to programming. We are using this Unit Website, Teams, and Blackboard Recordings for teaching. The unit runs in two distinct streams each focussing on one paradigm. For imperative programming, the aim is to introduce the notion of state and sequential operations. Important principles include recursion and iteration, assignment, pointers, and an understanding of the stack and heap. For functional programming, the aim is to introduce types and functions. Important principles include datatypes, evaluation order, higher-order functions, and purity. C and Haskell serve as the example languages. The unit consists of hybrid (in-person and online) lab sessions, video lectures, hybrid lecture summary sessions, exercises, and summative individual courseworks supported by hybrid labs. Note that self-study beyond lectures and labs is usually required to recap and compound the content taught. A typical week of the unit consists of 6x recorded online lectures, a hybrid lecture summary session on Tuesdays at 3pm for questions and answers with lecturers, hybrid imperative labs with lecturers and TAs after 10am on Wednesdays, hybrid functional labs with lecturers and TAs from 1pm on Thursdays, and approximately 5h self-study."],
[  "1", "0", "FEEDBACK",               "<strong>Feedback &amp; Support.</strong> There is a <a href='https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/teamslink.html' target='_blank'>Microsoft Team Environment</a> where peers, teaching assistants, and staff are there for you live during the lab slots. Usually we will be running live introduction and Q&amp;A sessions with staff at the beginning of these slots in any case. The Teams functionality is also there for you to ask questions outside the live slots. Use the weekly labs and Q&amp;A sessions as your primary points of contact to get regular help and feedback. If you feel you need in-person programming help in the lab then please raise your hand or, in case you participate online, let a teaching assistant know during the lab by adding a task in the One-on-One Support tab in the General Channel of Teams. If all of the above fail and you have fallen significantly behind then email our teaching associate <a href='mailto:jf16688@bristol.ac.uk'>James</a> and we will try to arrange extra help for you. If even this has failed then email <a href='mailto:tilo@cs.bris.ac.uk'>Tilo</a>, <a href='mailto:sh1670@bristol.ac.uk'>Sion</a>, <a href='mailto:peter.bennett@bristol.ac.uk'>Pete</a>, or <a href='mailto:meng.wang@bristol.ac.uk'>Meng</a>, and we will organise some extra support."],
[  "2", "0", "STAFF",                  "<strong>Staff &amp; Lab Team.</strong> <a href='mailto:tilo@cs.bris.ac.uk'>Tilo</a>, <a href='mailto:sh1670@bristol.ac.uk'>Sion</a>, <a href='mailto:meng.wang@bristol.ac.uk'>Meng</a>, <a href='mailto:peter.bennett@bristol.ac.uk'>Peter</a>, and <a href='mailto:jf16688@bristol.ac.uk'>James</a> welcome you to the unit. For questions, best use the functionality at the MS Team of the unit or ask us during our weekly Q&amp;A sessions or get hold of us during labs. Before you email lecturers please make sure you have asked your question on the Teams chat with no reply during labs, have created a help task using the One-on-One Support tab in Teams and did not get sufficient help, and have emailed <a href='mailto:jf16688@groups.bristol.ac.uk'>James</a> without getting a satisfying answer."],
[  "3", "0", "BUBBLES",                "<strong>Learning Bubbles.</strong> As a student in this unit you are part of a 'Learning Bubble', which is a group of students who work more closely together in their learning. During lab sessions you can use the in-person lab together with Mircosoft Teams with all your peers present in-person and in the channel associated to your Bubble (go to the channel and click 'Join' the meeting or click on 'Meet' if you are the first student starting the meeting). You should help each other during all formative courseworks. However, summative courseworks are to be completed individually - do not copy any code and avoid all plagiarism. Bubbles will be announced here."],
[  "4", "1", "ASK FOR HELP",           "mailto:jf16688@bristol.ac.uk"],
[  "5", "1", "MICROSOFT TEAMS",        "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10016_2021_TB-1/teamslink.html"],
[  "6", "1", "BLACKBOARD",             "https://www.ole.bris.ac.uk/webapps/blackboard/execute/content/blankPage?cmd=view&content_id=_5949401_1&course_id=_247722_1"],
[  "7", "1", "C STYLE GUIDE",          "imperative/week01/style.html"],
[  "8", "1", "MARKING",                "imperative/week01/marking.html"],
[  "9", "0", "BOOKS",                 "<strong>Books.</strong> The unit is not taught strictly along the lines of a textbook. However, often it is useful to cover a topic again from a different angle and textbooks can be helpful tools for this. For the imperative part, we recommend the online book <a target='_blank' href='https://en.wikibooks.org/wiki/C_Programming'>C Programming</a>. For the functional part, the online book <a target='_blank' href='http://learnyouahaskell.com'>Learn you a Haskell for Great Good</a> and the book <a target='_blank' href='https://www.amazon.co.uk/Programming-Haskell-Graham-Hutton/dp/1316626229'>Programming in Haskell</a> are recommended. Luckily, both languages C and Haskell have a long-standing following and thus many questions that books or the course don't cover can be answered directly by looking things up on the web or by searching across programmer forums."],
[  "10", "0","THANKS",                 "<strong>Thanks and Acknowledgements.</strong> The imperative part of this unit owes its existence and major parts of its content to Dr Ian Holyer. Despite changes and adjustments, Ian's work is underpinning the heart and soul of this unit. He developed the core of the imperative materials and championed the unit for many years. Some of his original materials are available on his <a target='_blank' href='https://csijh.gitlab.io/c-bites'>C-Bites Page</a>. Many thanks to Nick Wu and Jamie Willis for signitficant contributions to the functional teaching materials. Thanks also for inspirational C Notes by Neill Campbell. Thanks also to Dan Page for helpful tips regarding JS-Blackboard integration."],
[  "11", "1", "ATTENDANCE",            "https://www.ole.bris.ac.uk/webapps/blackboard/execute/blti/launchPlacement?blti_placement_id=_220_1&content_id=_5949456_1&course_id=_247722_1"],
[  "12", "1", "CATALOGUE",             "https://www.bris.ac.uk/unit-programme-catalogue/UnitDetails.jsa?ayrCode=21%2F22&unitCode=COMS10016"],
];
