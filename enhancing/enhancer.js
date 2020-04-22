module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement >= 20) {
    return item;
  } else {
    const enhancement = item.enhancement + 1;
    return { ...item, enhancement };
  }
}

function fail(item) {
  let enhancement;
  let durability;
  if (item.enhancement > 16) {
    enhancement = item.enhancement - 1;
    if (item.durability <= 10) {
      durability = 0;
    } else {  
      durability = item.durability - 10;
    } // end nested if
    return { ...item, durability, enhancement };
  } else {
    if (item.durability <= 5) {
      durability = 0;
    } else {  
      durability = item.durability - 5;
    } // end nested if
    return { ...item, durability };
  }
}

function repair(item) {
  const durability = 100;
  return { ...item, durability };
}

function get(item) {
  return { ...item };
}
