window.onload = function () {
    let resumeData = JSON.parse(localStorage.getItem("resumeData"));

    if (resumeData) {
        document.getElementById('preview-name').innerText = resumeData.name || "Your Name";
        document.getElementById('preview-contact').innerText = resumeData.contact || "N/A";
        document.getElementById('preview-gmail').innerText = resumeData.gmail || "N/A";
        document.getElementById('preview-address').innerText = resumeData.address || "N/A";
        document.getElementById('preview-work-exp').innerText = resumeData.workExp || "N/A";
        document.getElementById('preview-education').innerText = resumeData.education || "N/A";
        document.getElementById('preview-expertise').innerText = resumeData.expertise || "N/A";

        if (resumeData.photo) {
            document.getElementById('profile-pic').src = resumeData.photo;
        }
    }
};

// Function to Download Resume as PDF
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("download-btn").addEventListener("click", function () {
        var element = document.getElementById('resume-container');

        // Hide the button before generating PDF
        document.getElementById("download-btn").style.display = "none";

        var opt = {
            margin: 10,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 1},
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        // Generate PDF and then show the button back
        html2pdf().from(element).set(opt).save().then(() => {
            document.getElementById("download-btn").style.display = "block"; // Show the button back
        }).catch(error => {
            console.error("Error generating PDF:", error);
            document.getElementById("download-btn").style.display = "block"; // Show button back if error occurs
        });
    });
});
