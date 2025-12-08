document.addEventListener("DOMContentLoaded", function () {
  const content = document.querySelector(".js-content");
  const tocContainer = document.getElementById("toc");
  if (!content || !tocContainer) return;

  const headings = content.querySelectorAll("h1, h2, h3");
  if (!headings.length) return;

  const list = document.createElement("ul");

  headings.forEach((h) => {
    const level = h.tagName.toLowerCase(); // h1, h2, h3

    // Assure un id sur le titre
    if (!h.id) {
      h.id = h.textContent
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
    }

    const li = document.createElement("li");
    li.classList.add(`toc-${level}`);

    const a = document.createElement("a");
    a.href = `#${h.id}`;
    a.textContent = h.textContent;

    li.appendChild(a);
    list.appendChild(li);
  });

  tocContainer.appendChild(list);

  // Highlight de la section active au scroll
  const links = tocContainer.querySelectorAll("a");
  const sectionMap = Array.from(headings).map((h) => ({
    id: h.id,
    offset: h.offsetTop,
  }));

  function onScroll() {
    const pos = window.scrollY + 120;
    let currentId = sectionMap[0]?.id;

    for (const s of sectionMap) {
      if (pos >= s.offset) currentId = s.id;
      else break;
    }

    links.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === "#" + currentId);
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});
