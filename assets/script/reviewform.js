document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name-input").value;
    const email = document.getElementById("email-input").value;
    const comment = document.getElementById("comment-input").value;
    const radios = document.querySelectorAll('input[name="rating"]');
    let selectedValue;           
    radios.forEach((radio) => {
        if (radio.checked) {
            selectedValue = radio.value;
        }
    });
    console.log(name,email,comment,selectedValue)
})

function sendEmail(name,email,comment,rating) {
    const mailtoLink = `mailto:${email}?subject=Thanks for Review &body=Dear${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
}