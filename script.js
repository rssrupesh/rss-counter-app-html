const count = document.getElementById('count');
const add = document.getElementById('add');
const sub = document.getElementById('sub');
const rest = document.getElementById('rest');

add.addEventListener('click', () => {
  count.innerHTML++;
});

sub.addEventListener('click', () => {
  count.innerHTML--;
});

rest.addEventListener('click' , () => {
  count.innerHTML = 0;
})

