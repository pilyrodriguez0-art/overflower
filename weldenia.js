paper.install(window);

window.addEventListener('load', function () {
    paper.setup('flowerCanvas');

    const circle = new Path.Circle(
        view.center,
        50
    );

    circle.fillColor = 'yellow';
});
