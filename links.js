var links = {
    "Syllabus": "https://drive.google.com/drive/folders/1J8m-k2gqTlKKmb0FoX5c3ezIXdO1y3ye?usp=drive_link",

    "Participation Sheet Section 1": "",
    "Participation Sheet Section 2": "",

    "Absence Form": "https://forms.gle/McsRdqbfG7pvbBsN9",

    // Todo still
    "Class Recordings Section 1": "",
    "Class Recordings Section 2": "",

    "Piazza Section 1": "",
    "Piazza Section 2": "",

    "Preso Example 1": "https://drive.google.com/drive/folders/1gvoMNrSzKkWCEU6yIeF3haVTS4ekGPlj",
    "Preso Example 2": "https://www.slideshare.net/EshaBommireddy/esha-b-company-preso-big-basket",

    "Grades Sheet Section 1": "",
    "Grades Sheet Section 2": "",

    "Past Student Work": "https://drive.google.com/drive/folders/1szxdbP8n2eZhyC-mczMpex5Fn9ve8ddm",
    "IA Only Folder": "https://drive.google.com/drive/folders/1OlYQhlxpFVrLPerZJn4TQ9VbgwedtlfQ",


    "Project Preso Evaluation Section 1": "",
    "Project Preso Evaluation Section 2": "",
    "Company Preso Evaluation Section 1": "",
    "Company Preso Evaluation Section 2": "",
    "Team Evaluation Section 1": "",
    "Team Evaluation Section 2": "",

    "Pitch folder Section 1": "https://drive.google.com/drive/folders/1reBeEcRWiVt2Cd3DbjNjaWlMTBltDcJD?usp=drive_link",
    "Pitch folder Section 2": "https://drive.google.com/drive/folders/162XOCOWztgXJfLD0-s1Y8uda1yMzw5Pi?usp=drive_link",
    "Elevator Pitch Due Date": "Aug 30th, Sep 1st, Sep 6th",

    "Assignment 0 Due Date": "Aug 30th",
    "Assignment 0 Folder Section 1": "https://drive.google.com/drive/folders/1u1Ihs8YiLXo6dUcJY2v_fW7vkgOhm0Lv?usp=drive_link",
    "Assignment 0 Folder Section 2": "https://drive.google.com/drive/folders/10X9TiJTA0T771exL3s7PbxzXWsdl9BsM?usp=drive_link",

    "Company Preso Due Date": "See schedule",
    "Company Preso Folder Section 1": "",
    "Company Preso Folder Section 2": "",

    "Current Event Due Date": "See schedule",
    "Current Event Folder Section 1": "",
    "Current Event Folder Section 2": "",

    "Preso 1 Due Date": "Sep 11th",
    "Preso 1 Folder Section 1": "",
    "Preso 1 Folder Section 2": "",

    "Preso 2 Due Date": "TBD",
    "Preso 2 Folder Section 1": "",
    "Preso 2 Folder Section 2": "",

    "Preso 3 Due Date": "TBD",
    "Preso 3 Folder Section 1": "",
    "Preso 3 Folder Section 2": "",

    "Preso 4 Due Date": "TBD",
    "Preso 4 Folder Section 1": "",
    "Preso 4 Folder Section 2": "",

    "Preso 5 Due Date": "TBD",
    "Preso 5 Folder Section 1": "",
    "Preso 5 Folder Section 2": "",

    "Project Groups Due Date": "TBD",
    "Project Groups": "",
    "Reading folder": "https://drive.google.com/drive/folders/1ydX-RGexrRCjv3xk0R-I0JNpm6R3wqLK",
}

/* ====================================
         PROGRAMMER STUFF BELOW
   ==================================== */

function loadSection1() {
    loadLinks();

    var documentItem = document.getElementById("page-title");
    documentItem.innerText = "EECS 441 Section 1";
    documentItem = document.getElementById("section-title");
    documentItem.innerText = "Section 1";
    documentItem.href = "441F23_Section2.html";

    documentItem = document.getElementById("participation-sheet");
    documentItem.href = links["Participation Sheet Section 1"];

    documentItem = document.getElementById("recordings");
    documentItem.href = links["Class Recordings Section 1"];

    documentItem = document.getElementById("piazza");
    documentItem.href = links["Piazza Section 1"];

    documentItem = document.getElementById("grades");
    documentItem.href = links["Grades Sheet Section 1"];

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

    // documentItem = document.getElementById("current-event-folder");
    // documentItem.href = links["Current Event Folder Section 1"];

    documentItem = document.getElementById("reading-folder");
    documentItem.href = links["Reading folder"];

    documentItem = document.getElementById("pitch-folder");
    documentItem.href = links["Pitch folder Section 1"];
}

function loadSection2() {
    loadLinks();

    var documentItem = document.getElementById("page-title");
    documentItem.innerText = "EECS 441 Section 2";
    documentItem = document.getElementById("section-title");
    documentItem.innerText = "Section 2";
    documentItem.href = "441F23_Section1.html";

    documentItem = document.getElementById("participation-sheet");
    documentItem.href = links["Participation Sheet Section 2"];

    documentItem = document.getElementById("recordings");
    documentItem.href = links["Class Recordings Section 2"];

    documentItem = document.getElementById("piazza");
    documentItem.href = links["Piazza Section 2"];

    documentItem = document.getElementById("grades");
    documentItem.href = links["Grades Sheet Section 2"];

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

    // documentItem = document.getElementById("current-event-folder");
    // documentItem.href = links["Current Event Folder Section 2"];

    documentItem = document.getElementById("reading-folder");
    documentItem.href = links["Reading folder"];

    documentItem = document.getElementById("pitch-folder");
    documentItem.href = links["Pitch folder Section 2"];


}


function loadLinks() {
    var documentItem = document.getElementById("syllabus");
    documentItem.href = links["Syllabus"];

    documentItem = document.getElementById("absence-form");
    documentItem.href = links["Absence Form"];

    documentItem = document.getElementById("preso-ex-1");
    documentItem.href = links["Preso Example 1"];


    documentItem = document.getElementById("past-work");
    documentItem.href = links["Past Student Work"];

    // documentItem = document.getElementById("preso-ex-2");
    // documentItem.href = links["Preso Example 2"];

    // Elevator pitch assignment

    // documentItem = document.getElementById("pitch-folder");
    // documentItem.href = links["Pitch folder"];

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

    // Project groups
    documentItem = document.getElementById("project-groups-forms");
    documentItem.href = links["Project Groups"]
    documentItem = document.getElementById("project-groups-due");
    documentItem.textContent = links["Project Groups Due Date"]
}


function toggleAbout() {
    var documentItem = document.getElementById("about");
    console.log(documentItem.style.display);
    if (documentItem.style.display == "none") documentItem.style.display = "block";
    else documentItem.style.display = "none";
}
