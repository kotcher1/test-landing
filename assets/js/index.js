const selectSingle = document.querySelector('.ordering__select');
const selectSingle_title = selectSingle.querySelector('.ordering__select-title');
const selectSingle_labels = selectSingle.querySelectorAll('.ordering__select-label');

selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

function changeRange() {
  const range = document.querySelector('.ordering__range');
  const rangeText = document.querySelector('.ordering__range-value');
  rangeText.innerHTML=`${range.value}%`;
}