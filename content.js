const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));

async function load() {
  await wait(500);
  document.querySelector('[role="tablist"] [role="presentation"]:last-child a').click();
}

load();

