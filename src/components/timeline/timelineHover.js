const els = document.querySelectorAll('.small');

els.forEach(item => item.addEventListener('mouseover', (ev) => {
    const styles = ev.target.querySelector('.with-border');
    if (styles) {
        styles.style.opacity = 1;
    }
  }))

els.forEach(item => item.addEventListener('mouseout', (ev) => {
    const styles = ev.target.querySelector('.with-border');
    if (styles) {
        styles.style.opacity = 0;
    }
}))