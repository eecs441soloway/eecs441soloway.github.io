var links = {
    "Syllabus": "https://www.google.com",

    "Participation Sheet Section 1": "https://tinyurl.com/2p8zj9bn",
    "Participation Sheet Section 2": "https://tinyurl.com/w22section2attendance",

    "Absence Form": "http://tinyurl.com/441winter2022absence",

    "Class Recordings Section 1": "https://tinyurl.com/441winter2022sect1VideoClass",
    "Class Recordings Section 2": "https://tinyurl.com/441winter2022sect2VideoClass",

    "Piazza Section 1": "https://piazza.com/class/kt1vml4g5m16zw",
    "Piazza Section 2": "https://piazza.com/class/kt1rnxpsepp5my",

    "Preso Example 1": "http://www.slideshare.net/Sophia193014/headspace-company-presentation-250325322",
    "Preso Example 2": "https://www.slideshare.net/EshaBommireddy/esha-b-company-preso-big-basket",

    "Grades Sheet Section 1": "https://docs.google.com/spreadsheets/d/1aEGG_revn9Z_8LTk-IO0mMER9hTNWN9JG1UCI3atPss/edit#gid=1849646168",
    "Grades Sheet Section 2": "https://docs.google.com/spreadsheets/d/1fe-zI3LOq_fgZoMhJyf26pd1jsFbb9pw8BsI8BtIlKE/edit",

    "Student Work Section 1": "https://tinyurl.com/441winter2022section1",
    "Student Work Section 2": "https://tinyurl.com/441winter2022section2",

    "IA Folder": "http://www.google.com/",


    "Project Preso Evaluation Section 1": "https://docs.google.com/forms/d/e/1FAIpQLSdCINmr2GGwtuHTZRpIZZ7lzINtj9WMY7v7U2EM_EUsGMtWOw/viewform?usp=sf_link",
    "Project Preso Evaluation Section 2": "https://docs.google.com/forms/d/e/1FAIpQLSdmVTOHNY16e9hHWUPQmCN9WIMgmKQWS2GSeVJBsChyur4P_w/viewform?usp=sf_link",
    "Company Preso Evaluation Section 1": "https://docs.google.com/forms/d/e/1FAIpQLSe60QEcYe234W3Vxz1ORJsyVJuuk2rd-lNHlp7g5t4os8yRsQ/viewform?usp=sf_link",
    "Company Preso Evaluation Section 2": "https://docs.google.com/forms/d/e/1FAIpQLSco3Xa7nJ80VBCnvmDHd8TSdsg_iem6g3MO_KcS-oZCtnUtHA/viewform?usp=sf_link",
    "Team Evaluation Section 1": "https://docs.google.com/forms/d/e/1FAIpQLScM6wwBwufLgvMpfxxMGXg2eJcwmxpVZs1nuql25Tj_WGooug/viewform?usp=sf_link",
    "Team Evaluation Section 2": "https://docs.google.com/forms/d/e/1FAIpQLSeVqQoWEyujfamkVAiE8rtOOVfolAO9J4fBlj-UPolxA9j9Jg/viewform?usp=sf_link",

    "Elevator Pitch Due Date": "Jan 7, 10, 12",

    "Assignment 0 Due Date": "Jan 7",
    "Assignment 0 Folder Section 1": "https://drive.google.com/drive/folders/1VjoJIOYTH8x3ziAeLhDY2Hsc3IgeSEPa",
    "Assignment 0 Folder Section 2": "https://drive.google.com/drive/folders/1VjoJIOYTH8x3ziAeLhDY2Hsc3IgeSEPa",

    "Company Preso Due Date": "See schedule",
    "Company Preso Folder Section 1": "https://tinyurl.com/441winter2022section1company",
    "Company Preso Folder Section 2": "http://tinyurl.com/441winter2022section2company",

    "Preso 1 Due Date": "Jan 19",
    "Preso 1 Folder Section 1": "https://drive.google.com/drive/folders/1w53p4GgP3DJyZ_xkDtu3HBVVr_SHel_t",
    "Preso 1 Folder Section 2": "https://drive.google.com/drive/folders/1w53p4GgP3DJyZ_xkDtu3HBVVr_SHel_t",

    "Preso 2 Due Date": "Feb 2",
    "Preso 2 Folder Section 1": "https://drive.google.com/drive/folders/12MQb9wClVARm56R-b2ohnLNRCEk9Wtd_",
    "Preso 2 Folder Section 2": "https://drive.google.com/drive/folders/12MQb9wClVARm56R-b2ohnLNRCEk9Wtd_",

    "Preso 3 Due Date": "Mar 14",
    "Preso 3 Folder Section 1": "https://drive.google.com/drive/folders/1_hvwzZwN9Ed85UEeCzCC54blBST-hieF",
    "Preso 3 Folder Section 2": "https://drive.google.com/drive/folders/1_hvwzZwN9Ed85UEeCzCC54blBST-hieF",

    "Preso 4 Due Date": "Mar 23",
    "Preso 4 Folder Section 1": "https://drive.google.com/drive/folders/1IKnsCFjYUFtfyEOR_F7rYFNMG8zFtYzp",
    "Preso 4 Folder Section 2": "https://drive.google.com/drive/folders/1IKnsCFjYUFtfyEOR_F7rYFNMG8zFtYzp",

    "Preso 5 Due Date": "Apr 15, 18",
    "Preso 5 Folder Section 1": "https://tinyurl.com/441winter2022sect1Assign5",
    "Preso 5 Folder Section 2": "https://tinyurl.com/441winter2022sect2Assign5",

    "Course Files Section 1": "https://devondoyle.com",
    "Course Files Section 2": "https://devondoyle.com",

}

function loadSection1() {
    loadLinks();

    var documentItem = document.getElementById("participation-sheet");
    documentItem.href = links["Participation Sheet Section 1"];

    //documentItem = document.getElementById("course-files");
    //documentItem.href = links["Course Files Section 1"];

    documentItem = document.getElementById("recordings");
    documentItem.href = links["Class Recordings Section 1"];

    documentItem = document.getElementById("piazza");
    documentItem.href = links["Piazza Section 1"];

    documentItem = document.getElementById("grades");
    documentItem.href = links["Grades Sheet Section 1"];

    documentItem = document.getElementById("student-work");
    documentItem.href = links["Student Work Section 1"];

    documentItem = document.getElementById("project-eval");
    documentItem.href = links["Project Preso Evaluation Section 1"];

    documentItem = document.getElementById("company-eval");
    documentItem.href = links["Company Preso Evaluation Section 1"];

    documentItem = document.getElementById("team-eval");
    documentItem.href = links["Team Evaluation Section 1"];

    documentItem = document.getElementById("assign-0-folder");
    documentItem.href = links["Assignment 0 Folder Section 1"];

    documentItem = document.getElementById("preso-1-folder");
    documentItem.href = links["Preso 1 Folder Section 1"];

    documentItem = document.getElementById("preso-2-folder");
    documentItem.href = links["Preso 2 Folder Section 1"];

    documentItem = document.getElementById("preso-3-folder");
    documentItem.href = links["Preso 3 Folder Section 1"];

    documentItem = document.getElementById("preso-4-folder");
    documentItem.href = links["Preso 4 Folder Section 1"];

    documentItem = document.getElementById("preso-5-folder");
    documentItem.href = links["Preso 5 Folder Section 1"];

    documentItem = document.getElementById("company-preso-folder");
    documentItem.href = links["Company Preso Folder Section 1"];
}

function loadSection2() {
    loadLinks();

    var documentItem = document.getElementById("participation-sheet");
    documentItem.href = links["Participation Sheet Section 2"];

    //documentItem = document.getElementById("course-files");
    //documentItem.href = links["Course Files Section 2"];

    documentItem = document.getElementById("recordings");
    documentItem.href = links["Class Recordings Section 2"];

    documentItem = document.getElementById("piazza");
    documentItem.href = links["Piazza Section 2"];

    documentItem = document.getElementById("grades");
    documentItem.href = links["Grades Sheet Section 2"];

    documentItem = document.getElementById("student-work");
    documentItem.href = links["Student Work Section 2"];

    documentItem = document.getElementById("project-eval");
    documentItem.href = links["Project Preso Evaluation Section 2"];

    documentItem = document.getElementById("company-eval");
    documentItem.href = links["Company Preso Evaluation Section 2"];

    documentItem = document.getElementById("team-eval");
    documentItem.href = links["Team Evaluation Section 2"];

    documentItem = document.getElementById("assign-0-folder");
    documentItem.href = links["Assignment 0 Folder Section 2"];

    documentItem = document.getElementById("preso-1-folder");
    documentItem.href = links["Preso 1 Folder Section 2"];

    documentItem = document.getElementById("preso-2-folder");
    documentItem.href = links["Preso 2 Folder Section 2"];

    documentItem = document.getElementById("preso-3-folder");
    documentItem.href = links["Preso 3 Folder Section 2"];

    documentItem = document.getElementById("preso-4-folder");
    documentItem.href = links["Preso 4 Folder Section 2"];

    documentItem = document.getElementById("preso-5-folder");
    documentItem.href = links["Preso 5 Folder Section 2"];

    documentItem = document.getElementById("company-preso-folder");
    documentItem.href = links["Company Preso Folder Section 2"];
}


function loadLinks() {
    var documentItem = document.getElementById("syllabus");
    documentItem.href = links["Syllabus"];

    documentItem = document.getElementById("absence-form");
    documentItem.href = links["Absence Form"];

    documentItem = document.getElementById("preso-ex-1");
    documentItem.href = links["Preso Example 1"];

    documentItem = document.getElementById("ia-folder");
    documentItem.href = links["IA Folder"];

    // documentItem = document.getElementById("preso-ex-2");
    // documentItem.href = links["Preso Example 2"];

    // Elevator pitch assignment
    documentItem = document.getElementById("pitch-due");
    documentItem.textContent = links["Elevator Pitch Due Date"];

    // Company Preso assignment
    documentItem = document.getElementById("company-preso-due");
    documentItem.textContent = links["Company Preso Due Date"];


    // Assignment 0
    documentItem = document.getElementById("assign-0-due");
    documentItem.textContent = links["Assignment 0 Due Date"];


    // Preso 1
    documentItem = document.getElementById("preso-1-due");
    documentItem.textContent = links["Preso 1 Due Date"];

    // Preso 2
    documentItem = document.getElementById("preso-2-due");
    documentItem.textContent = links["Preso 2 Due Date"];

    // Preso 3
    documentItem = document.getElementById("preso-3-due");
    documentItem.textContent = links["Preso 3 Due Date"];

    // Preso 4
    documentItem = document.getElementById("preso-4-due");
    documentItem.textContent = links["Preso 4 Due Date"];

    // Preso 5
    documentItem = document.getElementById("preso-5-due");
    documentItem.textContent = links["Preso 5 Due Date"];
}