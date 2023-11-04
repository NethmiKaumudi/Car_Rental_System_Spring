let moreDetailsContainer = document.querySelector('.MoreDetails');
let detailsBox = document.querySelectorAll('.details');

document.querySelectorAll('.carsContainer .vehicles').forEach(vehicles => {
    vehicles.onclick = () => {
        moreDetailsContainer.style.display = 'flex';
        let name = vehicles.getAttribute('data-name');
        detailsBox.forEach(details => {
            let target = details.getAttribute('data-target');
            // Add this line for debugging
            console.log(`name: ${name}, target: ${target}`);

            if (name == target) {
                details.classList.add('active');
            }
        });
    }
});

detailsBox.forEach(close => {
    close.querySelector('.close').onclick = () => {
        close.classList.remove('active');
        moreDetailsContainer.style.display = 'none';
    };
});
