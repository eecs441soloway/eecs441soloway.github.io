var links = {
    "Syllabus": "https://www.google.com",

    "Course Files Section 1": "https://devondoyle.com",
    "Course Files Section 2": "https://devondoyle.com",

    "Absence Form": "http://tinyurl.com/441winter2022absence",

    "Class Recordings Section 1": "https://tinyurl.com/441winter2022sect1VideoClass",
    "Class Recordings Section 2": "https://tinyurl.com/441winter2022sect2VideoClass",

    "Piazza Section 1": "https://tinyurl.com/441winter2022sect1VideoClass",
    "Piazza Section 2": "https://tinyurl.com/441winter2022sect2VideoClass",

    "Preso Example 1": "http://www.slideshare.net/Sophia193014/headspace-company-presentation-250325322",
    "Preso Example 2": "https://www.slideshare.net/EshaBommireddy/esha-b-company-preso-big-basket",

    "Elevator Pitch Description": "http://soloway.pbworks.com/f/441winter2022%20Your%20App%20Idea%20-%20Pitch.pdf",
    "Elevator Pitch Due Dates": "Jan 7, 10, 12",

    "Assignment 0 Due Date": "Jan 7",
    "Assignment 0 Description": "http://soloway.pbworks.com/f/441winter2022%20Project%20Analysis%20%230.pdf",
    "Assignment 0 Folder": "https://drive.google.com/drive/folders/1VjoJIOYTH8x3ziAeLhDY2Hsc3IgeSEPa",

    "Company Preso Due Date": "See schedule!",
    "Company Preso Description": "http://soloway.pbworks.com/f/441winter2022%20company%20analysis%20preso%20template%20FINAL.pdf",
    "Company Preso Folder": "https://tinyurl.com/441winter2022section1company",

    "Preso 1 Due Date": "Jan 19",
    "Preso 1 Description": "http://soloway.pbworks.com/f/441winter2022%20Design%20Preso%20%231.pdf",
    "Preso 1 Folder": "https://drive.google.com/drive/folders/1w53p4GgP3DJyZ_xkDtu3HBVVr_SHel_t",

    "Preso 2 Due Date": "Feb 2",
    "Preso 2 Description": "http://soloway.pbworks.com/f/441winter2022%20%20preso%20%232%20who%20is%20your%20customer%20%2B%20MVP1.pdf",
    "Preso 2 Folder": "https://drive.google.com/drive/folders/12MQb9wClVARm56R-b2ohnLNRCEk9Wtd_",

    "Preso 3 Due Date": "Mar 14",
    "Preso 3 Description": "http://soloway.pbworks.com/f/Preso%20%233%20441winter2022%20MVP1%20Live%20Demo%20Assignment.pdf",
    "Preso 3 Folder": "https://drive.google.com/drive/folders/1_hvwzZwN9Ed85UEeCzCC54blBST-hieF",

    "Preso 4 Due Date": "Mar 23",
    "Preso 4 Description": "http://soloway.pbworks.com/f/Preso%20%234%20441winter2022%20%2B%20comments%20MVP1%20data%20presentation%20%2B%20MVP2.pdf",
    "Preso 4 Folder": "https://drive.google.com/drive/folders/1IKnsCFjYUFtfyEOR_F7rYFNMG8zFtYzp",

    "Preso 5 Due Date": "Apr 15, 18",
    "Preso 5 Description": "http://soloway.pbworks.com/f/Preso%20%235%20441winter2022%20MVP2%20%2B%20data%20presentation.pdf",
    "Preso 5 Folder": "https://drive.google.com/drive/folders/1bn61X3EAiG4K53KxM-5g-GJn5Q5kPZ7i",
}

function loadSection1() {
    loadLinks();

    documentItem = document.getElementById("course-files");
    documentItem.href = links["Course Files Section 1"];

    documentItem = document.getElementById("recordings");
    documentItem.href = links["Class Recordings Section 1"];
}

function loadSection2() {
    loadLinks();

    documentItem = document.getElementById("course-files");
    documentItem.href = links["Course Files Section 2"];

    documentItem = document.getElementById("recordings");
    documentItem.href = links["Class Recordings Section 2"];
}


function loadLinks() {
    var documentItem = document.getElementById("syllabus");
    documentItem.href = links["Syllabus"];

    documentItem = document.getElementById("absence-form");
    documentItem.href = links["Absence Form"];



    // documentItem = document.getElementById("preso-ex-1");
    // documentItem.href = links["Preso Example 1"];

    // documentItem = document.getElementById("preso-ex-2");
    // documentItem.href = links["Preso Example 2"];

    // Elevator pitch assignment
    documentItem = document.getElementById("pitch-due");
    documentItem.textContent = links["Elevator Pitch Due Dates"];
    documentItem = document.getElementById("pitch-description");
    documentItem.href = links["Elevator Pitch Description"];

    // Company Preso assignment
    documentItem = document.getElementById("company-preso-due");
    documentItem.textContent = links["Company Preso Due Date"];
    documentItem = document.getElementById("company-preso-description");
    documentItem.href = links["Company Preso Description"];
    documentItem = document.getElementById("company-preso-folder");
    documentItem.href = links["Company Preso Folder"];

    // Assignment 0
    documentItem = document.getElementById("assign-0-due");
    documentItem.textContent = links["Assignment 0 Due Date"];
    documentItem = document.getElementById("assign-0-description");
    documentItem.href = links["Assignment 0 Description"];
    documentItem = document.getElementById("assign-0-folder");
    documentItem.href = links["Assignment 0 Folder"];

    // Preso 1
    documentItem = document.getElementById("preso-1-due");
    documentItem.textContent = links["Preso 1 Due Date"];
    documentItem = document.getElementById("preso-1-description");
    documentItem.href = links["Preso 1 Description"];
    documentItem = document.getElementById("preso-1-folder");
    documentItem.href = links["Preso 1 Folder"];

    // Preso 2
    documentItem = document.getElementById("preso-2-due");
    documentItem.textContent = links["Preso 2 Due Date"];
    documentItem = document.getElementById("preso-2-description");
    documentItem.href = links["Preso 2 Description"];
    documentItem = document.getElementById("preso-2-folder");
    documentItem.href = links["Preso 2 Folder"];

    // Preso 3
    documentItem = document.getElementById("preso-3-due");
    documentItem.textContent = links["Preso 3 Due Date"];
    documentItem = document.getElementById("preso-3-description");
    documentItem.href = links["Preso 3 Description"];
    documentItem = document.getElementById("preso-3-folder");
    documentItem.href = links["Preso 3 Folder"];

    // Preso 4
    documentItem = document.getElementById("preso-4-due");
    documentItem.textContent = links["Preso 4 Due Date"];
    documentItem = document.getElementById("preso-4-description");
    documentItem.href = links["Preso 4 Description"];
    documentItem = document.getElementById("preso-4-folder");
    documentItem.href = links["Preso 4 Folder"];

    // Preso 5
    documentItem = document.getElementById("preso-5-due");
    documentItem.textContent = links["Preso 5 Due Date"];
    documentItem = document.getElementById("preso-5-description");
    documentItem.href = links["Preso 5 Description"];
    documentItem = document.getElementById("preso-5-folder");
    documentItem.href = links["Preso 5 Folder"];
}