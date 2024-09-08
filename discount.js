// two type of discount
// 1. normal discount
// 2. layer discount

function discountPrice(quantity) {
  if (quantity <= 100) {
    const total = quantity * 100;
    return total;
  } else if (quantity <= 200) {
    const total = quantity * 90;
    return total;
  } else {
    const total = quantity * 70;
    return total;
  }
}

const total = discountPrice(300);
console.log(total);
