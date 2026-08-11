paper.install(window);

window.addEventListener('load', function () {
    paper.setup('flowerCanvas');

    const petal = new Path.Ellipse({
        center: view.center,
        size: [180, 260]
    });

    petal.fillColor = 'white';
    petal.strokeColor = '#cccccc';
    petal.strokeWidth = 2;
});
