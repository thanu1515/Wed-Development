const thumbnails = document.querySelectorAll('.thumbnail');
const I = document.getElementById('I');
const S = document.getElementById('S');

thumbnails.forEach(thumbnail => 
{
  thumbnail.addEventListener('click', () => 
    {
       S.src = thumbnail.src;
       I.style.display = 'flex';
    });
});

function closeEnlargedImage() 
{
  I.style.display = 'none';
}