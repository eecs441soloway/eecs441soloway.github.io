var links = {
    "Syllabus": "https://www.google.com",
    "Course Files": "https://devondoyle.com",
    "Absence Form": "http://tinyurl.com/441winter2022absence",

    "Section 1 Class Videos": "https://tinyurl.com/441winter2022sect1VideoClass",
    "Section 2 Class Videos": "https://tinyurl.com/441winter2022sect2VideoClass",

    "Preso Example 1": "http://www.slideshare.net/Sophia193014/headspace-company-presentation-250325322",
    "Preso Example 2": "https://www.slideshare.net/EshaBommireddy/esha-b-company-preso-big-basket",


    "Elevator Pitch Description": "http://soloway.pbworks.com/f/441winter2022%20Your%20App%20Idea%20-%20Pitch.pdf",
    "Elevator Pitch Due Dates": "Jan 7, 10, 12",

    "Assignment 0 Due Date": "Jan 7",
    "Assignment 0 Description": "http://soloway.pbworks.com/f/441winter2022%20Project%20Analysis%20%230.pdf",
    "Assignment 0 Submit": "https://drive.google.com/drive/folders/1VjoJIOYTH8x3ziAeLhDY2Hsc3IgeSEPa",
    
    "Company Presentation Due Date": "See schedule for your presentation date!",
    "Company Presentation Description": "http://soloway.pbworks.com/f/441winter2022%20company%20analysis%20preso%20template%20FINAL.pdf",
    "Company Presentation Submit": "https://tinyurl.com/441winter2022section1company",
    
    "Presentation 1 Due Date": "Jan 19",
    "Presentation 1 Description": "http://soloway.pbworks.com/f/441winter2022%20Design%20Preso%20%231.pdf",
    "Presentation 1 Submit": "https://drive.google.com/drive/folders/1w53p4GgP3DJyZ_xkDtu3HBVVr_SHel_t",
    
    "Presentation 2 Due Date": "Feb 2",
    "Presentation 2 Description": "http://soloway.pbworks.com/f/441winter2022%20%20preso%20%232%20who%20is%20your%20customer%20%2B%20MVP1.pdf",
    "Presentation 2 Submit": "https://drive.google.com/drive/folders/12MQb9wClVARm56R-b2ohnLNRCEk9Wtd_",
    
    "Presentation 3 Due Date": "Mar 14",
    "Presentation 3 Description": "http://soloway.pbworks.com/f/Preso%20%233%20441winter2022%20MVP1%20Live%20Demo%20Assignment.pdf",
    "Presentation 3 Submit": "https://drive.google.com/drive/folders/1_hvwzZwN9Ed85UEeCzCC54blBST-hieF",
    
    "Presentation 4 Due Date": "Mar 23",
    "Presentation 4 Description": "http://soloway.pbworks.com/f/Preso%20%234%20441winter2022%20%2B%20comments%20MVP1%20data%20presentation%20%2B%20MVP2.pdf",
    "Presentation 4 Submit": "https://drive.google.com/drive/folders/1IKnsCFjYUFtfyEOR_F7rYFNMG8zFtYzp",
    
    "Presentation 5 Due Date": "Apr 15, 18",
    "Presentation 5 Description": "http://soloway.pbworks.com/f/Preso%20%235%20441winter2022%20MVP2%20%2B%20data%20presentation.pdf",
    "Presentation 5 Submit": "https://drive.google.com/drive/folders/1bn61X3EAiG4K53KxM-5g-GJn5Q5kPZ7i",

}

function loadLinks() {
    var documentItem = document.getElementById("syllabus-schedule");
    documentItem.href = links["Syllabus"];

    documentItem = document.getElementById("course-files");
    documentItem.href = links["Course Files"];

    documentItem = document.getElementById("absence-form");
    documentItem.href = links["Absence Form"];

    documentItem = document.getElementById("sec-1-videos");
    documentItem.href = links["Section 1 Class Videos"];

    documentItem = document.getElementById("sec-2-videos");
    documentItem.href = links["Section 2 Class Videos"];

    documentItem = document.getElementById("preso-ex-1");
    documentItem.href = links["Preso Example 1"];

    documentItem = document.getElementById("preso-ex-2");
    documentItem.href = links["Preso Example 2"];
    
    // Elevator pitch assignment
    documentItem = document.getElementById("pitch-due");
    documentItem.textContent = links["Elevator Pitch Due Dates"];

    documentItem = document.getElementById("pitch-description");
    documentItem.href = links["Elevator Pitch Description"];
    
    // Company Presentation assignment
    documentItem = document.getElementById("company-pres-due");
    documentItem.textContent = links["Company Presentation Due Date"];

    documentItem = document.getElementById("company-pres-description");
    documentItem.href = links["Company Presentation Description"];
    
    documentItem = document.getElementById("company-pres-submit");
    documentItem.href = links["Company Presentation Submit"];

    // Assignment 0
    documentItem = document.getElementById("assign-0-due");
    documentItem.textContent = links["Assignment 0 Due Date"];

    documentItem = document.getElementById("assign-0-description");
    documentItem.href = links["Assignment 0 Description"];
    
    documentItem = document.getElementById("assign-0-submit");
    documentItem.href = links["Assignment 0 Submit"];
    
    // Presentation 1
    documentItem = document.getElementById("presentation-1-due");
    documentItem.textContent = links["Presentation 1 Due Date"];

    documentItem = document.getElementById("presentation-1-description");
    documentItem.href = links["Presentation 1 Description"];
    
    documentItem = document.getElementById("presentation-1-submit");
    documentItem.href = links["Presentation 1 Submit"];
    
    // Presentation 2
    documentItem = document.getElementById("presentation-2-due");
    documentItem.textContent = links["Presentation 2 Due Date"];

    documentItem = document.getElementById("presentation-2-description");
    documentItem.href = links["Presentation 2 Description"];
    
    documentItem = document.getElementById("presentation-2-submit");
    documentItem.href = links["Presentation 2 Submit"];
    
    // Presentation 3
    documentItem = document.getElementById("presentation-3-due");
    documentItem.textContent = links["Presentation 3 Due Date"];

    documentItem = document.getElementById("presentation-3-description");
    documentItem.href = links["Presentation 3 Description"];
    
    documentItem = document.getElementById("presentation-3-submit");
    documentItem.href = links["Presentation 3 Submit"];
    
    // Presentation 4
    documentItem = document.getElementById("presentation-4-due");
    documentItem.textContent = links["Presentation 4 Due Date"];

    documentItem = document.getElementById("presentation-4-description");
    documentItem.href = links["Presentation 4 Description"];
    
    documentItem = document.getElementById("presentation-4-submit");
    documentItem.href = links["Presentation 4 Submit"];
    
    // Presentation 5
    documentItem = document.getElementById("presentation-5-due");
    documentItem.textContent = links["Presentation 5 Due Date"];

    documentItem = document.getElementById("presentation-5-description");
    documentItem.href = links["Presentation 5 Description"];
    
    documentItem = document.getElementById("presentation-5-submit");
    documentItem.href = links["Presentation 5 Submit"];
    



}