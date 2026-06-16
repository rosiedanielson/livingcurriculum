const scans = document.querySelectorAll(".scan");

scans.forEach(scan => {

    // scans become random size between 100px and 300px
    const size = Math.floor(Math.random() * 200) + 100;

    // Random position
    const maxX = window.innerWidth - size;
    const maxY = window.innerHeight - size;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    scan.style.width = `${size}px`;
    scan.style.height = `${size}px`;
    scan.style.left = `${x}px`;
    scan.style.top = `${y}px`;

});