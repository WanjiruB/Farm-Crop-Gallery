//filter
document.getElementById('crops-filter').addEventListener('change', function() {
    const selectedCrop = this.value; 

    document.querySelectorAll('.card').forEach(card => {
        const cropId = card.querySelector('.card-img-top').getAttribute('id');

       
        if (selectedCrop === 'all' || selectedCrop === cropId) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});




//popup
document.querySelectorAll('.images .card-img-top').forEach(image => {
    image.onclick = () => {
        const popupImage = document.querySelector('.popup-image');
        const popupImg = document.querySelector('#popup-img');
        const closePopup = document.querySelector('.close-popup');

        
        popupImg.src = image.src;
        
       
        popupImage.style.display = 'block';

        
        closePopup.onclick = () => {
            popupImage.style.display = 'none';
        };
    };
});





