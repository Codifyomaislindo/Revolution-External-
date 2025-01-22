
    const footer = document.querySelector('.footer');
    const trails = [];
    const maxTrails = 15;

    footer.addEventListener('mousemove', (e) => {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = e.pageX + 'px';
      trail.style.top = e.pageY + 'px';
      footer.appendChild(trail);
      trails.push(trail);

      if (trails.length > maxTrails) {
        const oldTrail = trails.shift();
        oldTrail.remove();
      }

      setTimeout(() => {
        trail.style.transform = 'scale(0)';
        setTimeout(() => trail.remove(), 200);
      }, 100);
    });

    // Particle effect
    const particles = document.querySelector('.particles');
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.width = Math.random() * 4 + 2 + 'px';
      particle.style.height = particle.style.width;
      particle.style.opacity = Math.random() * 0.5;
      particles.appendChild(particle);

      const animation = particle.animate([
        { transform: 'translateY(0) rotate(0deg)', opacity: particle.style.opacity },
        { transform: 'translateY(-100px) rotate(360deg)', opacity: 0 }
      ], {
        duration: Math.random() * 2000 + 1000,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
      });

      animation.onfinish = () => particle.remove();
    };

    setInterval(createParticle, 100);

    // Dynamic sparkles
    const addSparkle = (e) => {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = e.offsetX + 'px';
      sparkle.style.top = e.offsetY + 'px';
      e.target.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 1500);
    };

    document.querySelector('.youtube-container').addEventListener('mousemove', addSparkle);
  </script>
</body>
</html>