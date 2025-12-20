document.addEventListener("DOMContentLoaded", () => {
  const navLinks = Array.from(document.querySelectorAll(".hero-nav-links a"));
  if (!navLinks.length) return;

  // sections ciblées par les href="#..."
  const targets = navLinks
    .map(a => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  if (!targets.length) return;

  const linkById = new Map(
    navLinks
      .map(a => {
        const id = a.getAttribute("href")?.replace("#", "");
        return [id, a];
      })
      .filter(([id, a]) => id)
  );

  // helper: set active
  const setActive = (id) => {
    navLinks.forEach(a => a.classList.remove("is-active"));
    const link = linkById.get(id);
    if (link) link.classList.add("is-active");
  };

  // IntersectionObserver: on marque la section "dominante"
  const observer = new IntersectionObserver(
    (entries) => {
      // On garde uniquement les entrées visibles
      const visible = entries.filter(e => e.isIntersecting);
      if (!visible.length) return;

      // Choisir la plus visible (plus grand ratio)
      visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      setActive(visible[0].target.id);
    },
    {
      root: null,
      // Ajuste pour tenir compte de ta navbar fixed (≈ hauteur + marge)
      // Ici, on considère la section "active" quand elle est dans la zone centrale.
      rootMargin: "-25% 0px -55% 0px",
      threshold: [0.1, 0.2, 0.35, 0.5, 0.65, 0.8],
    }
  );

  targets.forEach(sec => observer.observe(sec));

  // Optionnel: au chargement si on arrive direct avec un hash
  const initial = window.location.hash?.replace("#", "");
  if (initial && linkById.has(initial)) setActive(initial);
});
