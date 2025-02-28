function sendData() {
    let resumeData = {
        name: document.getElementById('name').value,
        contact: document.getElementById('contact').value,
        gmail: document.getElementById('gmail').value,
        address: document.getElementById('address').value,
        workExp: document.getElementById('work-exp').value,
        education: document.getElementById('education').value,
        expertise: document.getElementById('expertise').value,
    };

    let photo = document.getElementById('photo').files[0];
    if (photo) {
        let reader = new FileReader();
        reader.onload = function (e) {
            resumeData.photo = e.target.result;
            localStorage.setItem("resumeData", JSON.stringify(resumeData));
            window.location.href = "preview.html";
        };
        reader.readAsDataURL(photo);
    } else {
        localStorage.setItem("resumeData", JSON.stringify(resumeData));
        window.location.href = "preview.html";
    }

}
