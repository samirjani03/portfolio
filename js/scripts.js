document.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', () => {
            const section = star.getAttribute('data-section');
            document.querySelector(`#section-${section}`).scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const tooltip = document.getElementById('tooltip');
    
        document.querySelectorAll('.tooltip-link').forEach(link => {
            link.addEventListener('mouseover', (e) => {
                const message = e.target.getAttribute('data-tooltip');
                tooltip.textContent = message;
                tooltip.style.opacity = 1;
                tooltip.style.left = `${e.pageX + 5}px`;
                tooltip.style.top = `${e.pageY + 5}px`;
            });
    
            link.addEventListener('mousemove', (e) => {
                tooltip.style.left = `${e.pageX + 5}px`;
                tooltip.style.top = `${e.pageY + 5}px`;
            });
    
            link.addEventListener('mouseout', () => {
                tooltip.style.opacity = 0;
            });
        });
    });
    // document.addEventListener('DOMContentLoaded', function() {
    //     const emailSpan = document.getElementById('email');
        
    //     emailSpan.addEventListener('click', function(e) {
    //         e.preventDefault();
            
    //         const email = this.textContent;
    //         const subject = 'Subject here'; // You can customize this
    //         const body = 'Email body here'; // You can customize this
            
    //         // Construct Gmail compose URL
    //         const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
    //         // Open Gmail in a new tab
    //         window.open(gmailUrl, '_blank');
    //     });
    // });
    // Email & linked in 
    document.addEventListener('DOMContentLoaded', function() {
        const emailSpan = document.getElementById('email');
        const linkedinSpan = document.getElementById('linkedin');
        const github = document.getElementById('github');
        const linktree = document.getElementById('linktree');
        linktree.addEventListener('click',function(e){
        const linktreeurl='https://linktr.ee/samir_jani';
        window.open(linktreeurl, '_blank');
        });
        github.addEventListener('click',function(e){
const githuburl='https://github.com/samirjani03';
window.open(githuburl, '_blank');
        });
        emailSpan.addEventListener('click', function(e) {
            e.preventDefault();
            const email = this.textContent;
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
            window.open(gmailUrl, '_blank');
        });
    
        linkedinSpan.addEventListener('click', function(e) {
            e.preventDefault();
            // Replace this URL with your actual LinkedIn profile URL
            const linkedinUrl = 'https://www.linkedin.com/in/samir-jani-79b6a625a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
            window.open(linkedinUrl, '_blank');
        });
    });