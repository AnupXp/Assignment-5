function clickEvent(id) {
  addBooking(id);
}
function bookingSeat(id) {
  // ticket seat no show in calculation part
  document.getElementById(id).style.backgroundColor = "rgb(29,209,0)";
  const addNewClass = document.getElementById("booking");
  const newDiv = document.createElement("div");
  const appendSeat = `<div class="flex flex-row justify-between py-4 px-8">
  <p class="font-inter text-[rgba(3,7,18,0.6)] seatName">${id}</p>
  <p class="font-inter text-[rgba(3,7,18,0.6)]">Economy</p>
  <p class="font-inter text-[rgba(3,7,18,0.6)] seatPrice">550</p>
</div>`;
  newDiv.innerHTML = appendSeat;
  addNewClass.appendChild(newDiv);
  // seat price calculation
  const price = document.getElementsByClassName("seatPrice");
  let total = 0;
  for (let i = 0; i < price.length; i++) {
    const ticketPrice = price[i].innerText;
    total = total + parseInt(ticketPrice);
  }
  document.getElementById("total_price").innerText = total;
  document.getElementById("grand_total").innerText = total;
  const totalSeat = document.getElementById("total_seat");
  totalSeat.innerText = parseInt(totalSeat.innerText) - 1;
  const bookingSeat = document.getElementById("booking_seat");
  bookingSeat.innerText = parseInt(bookingSeat.innerText) + 1;
}
// booking and conditions
function addBooking(id) {
  const seatBooking = document.getElementsByClassName("seatName");
  const bookingLength = seatBooking.length;
  if (bookingLength === 0) {
    bookingSeat(id);
  } else if (bookingLength > 3) {
    alert("You cannot buy more than 4 ticket");
  } else {
    let seat = 0;
    for (let i = 0; i < bookingLength; i++) {
      if (seatBooking[i].innerText === id) {
        seat += 1;
      }
    }
    if (seat === 0) {
      bookingSeat(id);
    } else {
      alert("Seat already booked !!!");
    }
  }
}
// discount and coupon
function discountCalculation  (discount) {
  document.getElementById("coupon_div").style.display = "none";
  const getPrice = document.getElementById("total_price").innerText;
  const totalPrice = parseInt(getPrice);
  const grand = totalPrice - (parseInt(discount) * totalPrice) / 100;
  document.getElementById("grand_total").innerText = grand;
};

function applyCoupon(){
  const getCoupon = document.getElementById("coupon_code").value;
  if (getCoupon === "NEW15") {
    discountCalculation(15);
  }
  if (getCoupon === "Couple 20") {
    discountCalculation(20);
  }
};
function buy(){
  // hide header main and footer section
  const header=document.getElementById('header')
  header.classList.add('hidden')
  const main=document.getElementById('main')
  main.classList.add('hidden')
  const footer=document.getElementById('footer')
  footer.classList.add('hidden')
  // remove successful part
  const success=document.getElementById('done')
  success.classList.remove('hidden')
}