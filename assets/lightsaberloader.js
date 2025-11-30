// // Lightsaber loader
// function setLoading(is) {
//     // Clear previous loader
//     const prev = resultsBox.querySelector('.loader-container');
//     if (prev && prev.dataset.flickerInterval) clearInterval(prev.dataset.flickerInterval);
//     if (prev && prev.dataset.animFrame) cancelAnimationFrame(prev.dataset.animFrame);
//     resultsBox.innerHTML = '';
//     if (!is) return;

//     // Loader container
//     const loaderContainer = document.createElement('div');
//     loaderContainer.className = 'loader-container';
//     loaderContainer.style.position = 'relative';
//     loaderContainer.style.display = 'flex';
//     loaderContainer.style.flexDirection = 'column';
//     loaderContainer.style.alignItems = 'center';
//     loaderContainer.style.justifyContent = 'center';
//     loaderContainer.style.height = '180px';
//     resultsBox.appendChild(loaderContainer);

//     // Lightsaber group (blade + hilt)
//     const lightsaber = document.createElement('div');
//     lightsaber.style.position = 'absolute';
//     lightsaber.style.bottom = '20px'; // leave space for text
//     lightsaber.style.transformOrigin = 'bottom center';
//     loaderContainer.appendChild(lightsaber);

//     // Blade
//     const blade = document.createElement('div');
//     blade.style.width = '12px';
//     blade.style.height = '140px';
//     blade.style.borderRadius = '6px';
//     blade.style.background = 'linear-gradient(to top, #39ff14 0%, #39ff14 100%)';
//     blade.style.boxShadow = '0 0 20px #39ff14';
//     lightsaber.appendChild(blade);

//     // Hilt
//     const hilt = document.createElement('div');
//     hilt.style.width = '16px';
//     hilt.style.height = '30px';
//     hilt.style.background = 'linear-gradient(to bottom, #888 0%, #555 100%)';
//     hilt.style.borderRadius = '4px';
//     hilt.style.position = 'absolute';
//     hilt.style.bottom = '0';
//     hilt.style.left = '50%';
//     hilt.style.transform = 'translateX(-50%)';
//     lightsaber.appendChild(hilt);

//     // Loading text
//     const loadingText = document.createElement('div');
//     loadingText.textContent = 'Loading…';
//     loadingText.style.marginTop = '180px'; // below lightsaber
//     loadingText.style.fontFamily = 'Arial, sans-serif';
//     loadingText.style.fontSize = '14px';
//     loadingText.style.color = '#39ff14';
//     loaderContainer.appendChild(loadingText);

//     // Glow flicker
//     const flickerInterval = setInterval(() => {
//       const glow = 20 + Math.random() * 15;
//       blade.style.boxShadow = `0 0 ${glow}px #39ff14`;
//     }, 80);
//     loaderContainer.dataset.flickerInterval = flickerInterval;

//     // Swing animation
//     let angle = 0;
//     let direction = 1;
//     const speed = 1.2;
//     function animate() {
//       angle += direction * speed;
//       if (angle > 30 || angle < -30) direction *= -1;
//       lightsaber.style.transform = `rotate(${angle}deg)`;
//       loaderContainer.dataset.animFrame = requestAnimationFrame(animate);
//     }
//     animate();
//   }