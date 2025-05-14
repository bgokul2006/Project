document.getElementById('moreInfoBtn').addEventListener('click', function() {
    const moreInfo = document.getElementById('moreInfo');
    if (moreInfo.classList.contains('hidden')) {
        moreInfo.classList.remove('hidden');
        this.innerHTML = 'Show Less Info';
    } else {
        moreInfo.classList.add('hidden');
        this.innerHTML = 'Show More Info';
    }
});
