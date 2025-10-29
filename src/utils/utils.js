export const handleTabClick = (i, id, ref, gap, set, e) => {
  if (e && typeof e.preventDefault === 'function') e.preventDefault();

  // update active tab first
  set(i);

  // wait for the DOM to update after state change, then compute position
  // using requestAnimationFrame ensures layout has been applied
  window.requestAnimationFrame(() => {
    const target = document.getElementById(id);
    if (!target) return;

    // position the target immediately below the section title
    const hangingPoint = ref ? ref.getBoundingClientRect().height : 0;

    const top = target.getBoundingClientRect().top + window.scrollY - hangingPoint - gap;
    window.scrollTo({ top, behavior: 'smooth' });
  });
}