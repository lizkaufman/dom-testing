const myH1 = document.querySelector('h1');

try {
  if (!myH1) {
    throw new Error('No H1!'); //throws error if no h1
  }
  console.log('There is an h1.'); //runs if there is an h1
} catch (error) {
  console.log(error);
}

try {
  if (!myH1.innerText === 'Fri-yay') {
    throw new Error('H1 inner text was NOT Fri-yay.');
  } else {
    console.log('Inner text was Fri-yay.');
  }
} catch {
  console.log(error);
}

const myP = document.querySelector('p');
const myBody = document.querySelector('body');

try {
  if (!myP) {
    throw new Error('No p!');
  }
  console.log('There be a p!');
} catch (error) {
  console.log(error);
}

try {
  if (myP.parentNode != myBody) {
    throw new Error('P is not in the body... ew.');
  }
  console.log('P is in the body');
} catch (error) {
  console.log(error);
}

try {
  if (myP.innerText != 'donuts') {
    throw new Error('No donuts');
  }
  console.log('Yeah donuts');
} catch (error) {
  console.log(error);
}

try {
  if (!myP.classList.contains('breakfast')) {
    throw new Error('No breakfast');
  }
  console.log('Yeah breakfast');
} catch (error) {
  console.log(error);
}

try {
  if (myP.style.color != 'pink') {
    throw new Error('P is not pink');
  }
  console.log('Pink p! See a doctor.');
} catch (error) {
  console.log(error);
}

console.log('new tests for git branch');
