const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
    const suffix = this.dataset.sizing || '';
    

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));


function showPopUp() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
    setTimeout(function() {
        closePopup();
    }, 4000);
}

function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}

window.onload = showPopUp;
