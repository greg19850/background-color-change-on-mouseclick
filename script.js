const colorChange = function (event) {
    let x = event.clientX;
    let y = event.clientY;

    let color = colorPick(x, y)

    document.body.style.backgroundColor = color
};

const colorPick = (x, y) => {
    if (x % 2 == 0 && y % 2 == 0) {
        return 'red'
    } else if (x % 2 != 0 && y % 2 != 0) {
        return 'green'
    } else {
        return 'blue'
    }
}

document.body.addEventListener('click', colorChange);