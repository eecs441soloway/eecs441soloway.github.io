var links = {
    "Syllabus": "https://www.google.com",
    "Course Files": "https://devondoyle.com",
    "Absence Form": "http://tinyurl.com/441winter2022absence",

    "Section 1 Class Videos": "https://tinyurl.com/441winter2022sect1VideoClass",
    "Section 2 Class Videos": "https://tinyurl.com/441winter2022sect2VideoClass",

    "Preso Example 1": "http://www.slideshare.net/Sophia193014/headspace-company-presentation-250325322",
    "Preso Example 2": "https://www.slideshare.net/EshaBommireddy/esha-b-company-preso-big-basket",

}

function loadLinks() {
    var documentItem = document.getElementById("syllabus-schedule");
    documentItem.href = links["Syllabus"];

    documentItem = document.getElementById("course-files");
    documentItem.href = links["Course Files"];

    documentItem = document.getElementById("absence-form");
    documentItem.href = links["Absence Form"];

    documentItem = document.getElementById("sec-2-videos");
    documentItem.href = links["Section 2 Class Videos"];

    // documentItem = document.getElementById("preso-ex-1");
    // documentItem.href = links["Preso Example 1"];

    documentItem = document.getElementById("preso-ex-2");
    documentItem.href = links["Preso Example 2"];

}