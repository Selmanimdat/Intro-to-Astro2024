document.addEventListener('DOMContentLoaded', (event) => {
    const downloadBtn = document.getElementById('download-btn');

    downloadBtn.addEventListener('click', () => {
        const resumeUrl = 'resume.pdf'; // Replace with the actual path to your resume file
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Selman_Imdat_Resume.pdf'; // Filename for the downloaded resume
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
