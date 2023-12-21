const btn = document.querySelector('button');
let initCount = 0;

btn.setAttribute('data-count', initCount);

btn.addEventListener('click', function () {
   initCount++;
   console.log(initCount);
   btn.dataset.count = initCount;
} )