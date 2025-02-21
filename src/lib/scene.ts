import * as THREE from "three";

function createCubeScene(canvas: HTMLCanvasElement) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: "red", wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    }
    animate();
}

function createCircleScene(canvas: HTMLCanvasElement) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);


    const geometry = new THREE.CircleGeometry(1, 32);


    const material = new THREE.MeshBasicMaterial({
        color: "red",
        wireframe: true
    });
    const circle = new THREE.Mesh(geometry, material);
    scene.add(circle);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        circle.rotation.x += 0.01;
        circle.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}

function createRectangleScene(canvas: HTMLCanvasElement) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const geometry = new THREE.BoxGeometry(1, 2, 1);
    const material = new THREE.MeshBasicMaterial({ color: "red", wireframe: true });
    const rectangle = new THREE.Mesh(geometry, material);
    scene.add(rectangle);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);

        rectangle.rotation.x += 0.01;
        rectangle.rotation.y += 0.01;

        renderer.render(scene, camera);
    }
    animate();
}

function createTriangleScene(canvas: HTMLCanvasElement) {
    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    // Create triangle geometry
    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array([
        0.0, 1.0, 0.0,    // top
        -1.0, -1.0, 0.0,  // bottom left
        1.0, -1.0, 0.0    // bottom right
    ]);
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

    // Create material and mesh
    const material = new THREE.MeshBasicMaterial({
        color: "red",
        side: THREE.DoubleSide,
        wireframe: true
    });
    const triangle = new THREE.Mesh(geometry, material);
    scene.add(triangle);

    // Position camera
    camera.position.z = 5;

    // Animation function
    function animate() {
        requestAnimationFrame(animate);

        // Rotate triangle
        triangle.rotation.x += 0.01;
        triangle.rotation.y += 0.01;

        renderer.render(scene, camera);
    }
    animate();
}

export function createScene(canvas: HTMLCanvasElement, type: string) {
    switch (type) {
        case "cube":
            createCubeScene(canvas);
            break;
        case "circle":
            createCircleScene(canvas);
            break;
        case "rectangle":
            createRectangleScene(canvas);
            break;
        case "triangle":
            createTriangleScene(canvas);
            break;
    }
}

