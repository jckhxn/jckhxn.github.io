const doggo = document.getElementById('doggo');
fetch("https://dog.ceo/api/breed/corgi/images/random").then(res => res.json()).then(data => doggo.src=data.message);