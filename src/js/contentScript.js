const targetNode = document.body;
const config = { attributes: true, childList: true, subtree: false };

const callback = function(mutationsList) {
  for(let mutation of mutationsList) {
    if (mutation.type === 'childList') {
      for( let i = 0; i < mutation.addedNodes.length; i += 1) {
        if(/^RnEpo  _Yhr4/.test(mutation.addedNodes[i].className)) {
          mutation.addedNodes[i].remove();
          setTimeout(() => { document.body.style.overflow = 'scroll'; }, 500);
        }
      }
    }
  }
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

const imageLinkFinder = (e) => {
  if(e?.target?.nodeName === 'UL') {
    if(e.target.parentElement?.parentElement?.href) {
      window.open(e.target.parentElement.parentElement.href);
    }
  }
};

document.addEventListener('click', imageLinkFinder);
