function scrollUp() {
    const height = innerHeight;
    window.scrollBy(0, 0 - height);
    console.log(height);
}

function scrollDown() {
    const height = innerHeight;
    window.scrollBy(0, height);
    console.log(height);
}
