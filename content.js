const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));

async function load() {
  await wait(500);
  if (document.querySelector('[role="tablist"] [role="presentation"]:last-child a')) {
    document.querySelector('[role="tablist"] [role="presentation"]:last-child a').click();
  }
}

load();

