window.onload = function () {
    let resumeData = JSON.parse(localStorage.getItem("resumeData"));

    if (resumeData) {
        document.getElementById('preview-name').innerText = resumeData.name || "Your Name";
        document.getElementById('preview-contact').innerText = resumeData.contact || "N/A";
        document.getElementById('preview-gmail').innerText = resumeData.gmail || "N/A";
        document.getElementById('preview-address').innerText = resumeData.address|| "N/A";
        document.getElementById('preview-work-exp').innerText = resumeData.workExp || "N/A";
        document.getElementById('preview-education').innerText = resumeData.education || "N/A";
        document.getElementById('preview-expertise').innerText = resumeData.expertise || "N/A";

        if (resumeData.photo) {
            document.getElementById('profile-pic').src = resumeData.photo;
        }
    }
 // Function to download the resume as a PDF
 document.getElementById("download-btn").addEventListener("click", function () {
    var element = document.getElementById('resume-container');
    
    // Options for the PDF
    var opt = {
        margin:       1,
        filename:     'resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 1.4},
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Create the PDF from the HTML
    html2pdf().from(element).set(opt).save().then(() => {
        // **Do not show the button again (It remains hidden)**
        console.log("PDF downloaded, button hidden permanently.");
});
};
