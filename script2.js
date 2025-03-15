
function opentab(tabname) {
    // Get all tab links and tab contents
    var tablinks = document.getElementsByClassName('tab-links');
    var tabcontents = document.getElementsByClassName('tab-contents');


    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }

    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }

    var activeTabLink = document.querySelector(`.tab-links[onclick="opentab('${tabname}')"]`);
    if (activeTabLink) {
        activeTabLink.classList.add("active-link");
    }

    var activeTabContent = document.getElementById(tabname);
    if (activeTabContent) {
        activeTabContent.classList.add("active-tab");
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const scriptURL = GOOGLE_SCRIPT_URL;
    const form = document.forms['submit-to-google-sheet'];
    const submitButton = document.getElementById("buttonSubmit");








    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    console.log('Success!', response);
                    alert('Mensagem enviada com sucesso!');
                    form.reset();
                })
                .catch(error => console.error('Error!', error.message)).finally(() => {

                    submitButton.disabled = false;

                });
        });

        form.dataset.listenerAdded = true;

     

    } else {
        console.error('Form not found!');
    }
});
