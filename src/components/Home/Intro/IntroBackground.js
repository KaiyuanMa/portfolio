import React, { useEffect } from "react";
import * as dat from "dat.gui";
import "./styles.css";

function IntroBackground() {
  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({
      canvas: webgl,
      alpha: true,
    });
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    var scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 3;
    scene.add(camera);
    var sphere_geometry = new THREE.SphereGeometry(0.1, 128, 128);
    var material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    material.roughness = 1;
    material.metalness = 1;

    var sphere = new THREE.Mesh(sphere_geometry, material);
    scene.add(sphere);

    const pointLight = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.x = 2;
    pointLight.position.y = 3;
    pointLight.position.z = 3;
    pointLight.intensity = 0.5;
    scene.add(pointLight);

    // const gui = new dat.GUI();
    // gui.add(pointLight.position, "x");
    // gui.add(pointLight.position, "y");
    // gui.add(pointLight.position, "z");
    // gui.add(pointLight, "intensity");
    // gui.add(material, "roughness");
    // gui.add(material, "metalness");

    const updateLight = (event) => {
      pointLight.position.z = document.documentElement.scrollTop * 0.01 + 3;
      camera.position.z = document.documentElement.scrollTop * 0.005 + 3;
      sphere.position.y = document.documentElement.scrollTop * 0.001;
    };
    let home = document.getElementById("home");
    home.addEventListener("scroll", updateLight);

    var update = function () {
      // change '0.003' for more aggressive animation
      var time = performance.now() * 0.002;
      //console.log(time)

      //go through vertices here and reposition them

      // change 'k' value for more spikes
      var k = 3;
      for (var i = 0; i < sphere.geometry.vertices.length; i++) {
        var p = sphere.geometry.vertices[i];
        p.normalize().multiplyScalar(
          1 + 0.3 * noise.perlin3(p.x * k + time, p.y * k, p.z * k)
        );
      }
      sphere.geometry.computeVertexNormals();
      sphere.geometry.normalsNeedUpdate = true;
      sphere.geometry.verticesNeedUpdate = true;
    };

    function animate() {
      update();
      /* render scene and camera */
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, []);
  return <canvas id="webgl"></canvas>;
}

export default IntroBackground;
