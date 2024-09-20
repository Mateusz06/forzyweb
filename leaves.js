// leaves.js

document.addEventListener('DOMContentLoaded', () => {
    const leavesContainer = document.getElementById('leaves-container');
    const leafImages = ['leaf1.png', 'leaf2.png', 'leaf3.png'];
    const numberOfLeaves = 50;

    for (let i = 0; i < numberOfLeaves; i++) {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        leaf.style.left = `${Math.random() * 100}vw`;
        leaf.style.animationDuration = `${Math.random() * 5 + 5}s`;
        leaf.style.animationDelay = `${Math.random() * 5}s`;
        leaf.style.backgroundImage = `url(${leafImages[Math.floor(Math.random() * leafImages.length)]})`;
        leavesContainer.appendChild(leaf);
    }
});
