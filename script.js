document.getElementById('uploadBtn').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('uploadedImage').src = e.target.result;
            document.getElementById('imageContainer').style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

// Rating System 
const stars = document.querySelectorAll('.star');

stars.forEach(star => {
    star.addEventListener('click', function() {
        let ratingValue = this.getAttribute('data-value');


        stars.forEach(s => s.classList.remove('selected'));


        for (let i = 0; i < ratingValue; i++) {
            stars[i].classList.add('selected');
        }
    });
});

// Delete Image 
document.getElementById('deleteBtn').addEventListener('click', function() {
    document.getElementById('uploadedImage').src = "";
    document.getElementById('imageContainer').style.display = 'none';
    document.getElementById('fileInput').value = "";

    stars.forEach(s => s.classList.remove('selected'));
});
