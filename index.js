document.querySelector("#submit").addEventListener("click", () => {
  event.preventDefault();
  let tax;
  let salary = parseInt(document.querySelector("#salary").value);
  let numChild = parseInt(document.querySelector("#numChild").value);
  let taxSpan = document.querySelector("#taxSpan");

  let box1 = document.querySelector(".box-1");
  let box2 = document.querySelector(".box-2");

  if (document.querySelector("#married").checked) {
    tax = parseInt(-500);
    if (salary < 2000) {
      box1.classList.add("hidden");
      box2.classList.remove("hidden");
      taxSpan.innerHTML = 0;
    } else if (salary >= 2000) {
      if (numChild <= 0) {
        box1.classList.add("hidden");
        box2.classList.remove("hidden");
        tax = (20 * tax) / 100;
        taxSpan.innerHTML = tax;
      } else if (numChild > 0) {
        box1.classList.add("hidden");
        box2.classList.remove("hidden");
        let refundChild = numChild * 100;
        tax = (20 * tax) / 100 - refundChild;
        taxSpan.innerHTML = tax;
      }
    }
  }

  if (document.querySelector("#single").checked) {
    tax = parseInt(0);
    if (salary < 2000) {
      box1.classList.add("hidden");
      box2.classList.remove("hidden");
      taxSpan.innerHTML = 0;
    } else if (salary >= 2000) {
      if (numChild <= 0) {
        box1.classList.add("hidden");
        box2.classList.remove("hidden");
        tax = (20 * tax) / 100;
        taxSpan.innerHTML = tax;
      } else if (numChild > 0) {
        box1.classList.add("hidden");
        box2.classList.remove("hidden");
        let refundChild = numChild * 100;
        tax = (20 * tax) / 100 - refundChild;
        taxSpan.innerHTML = tax;
      }
    }
  }
});

document.querySelector("#again").addEventListener("click", () => {
  event.preventDefault();

  let box1 = document.querySelector(".box-1");
  let box2 = document.querySelector(".box-2");

  box1.classList.remove("hidden");
  box2.classList.add("hidden");
});
