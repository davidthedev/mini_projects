// --- Image
const imgTextInput = document.getElementById("img-text-input");
const imageText = document.getElementById("image-text");

imgTextInput.addEventListener('input', (e) => {
  imageText.innerHTML = `${e.target.value}`;
});

// --- Button
const btn = document.getElementsByTagName('button');

btn[0].addEventListener('click', (e) => {
  if (e.target.value === 'show') {
    btn[0].value = 'hide';
    btn[0].innerHTML = 'Hide me';
    image.style.display = 'inline-block';
  } else {
    btn[0].value = 'show';
    btn[0].innerHTML = 'Show me';
    image.style.display = 'none';
  }
});

// --- Range controls
const controls = document.querySelectorAll('input');

controls.forEach((control) => {
  setStyle(control);
});

function setStyle(control) {
  control.addEventListener('input', (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const suffix = e.target.dataset.suffix ? e.target.dataset.suffix : '';

    document.documentElement.style.setProperty(`--${name}`, `${value}${suffix}`);
  });
}
