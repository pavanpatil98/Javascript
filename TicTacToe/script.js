document.addEventListener("DOMContentLoaded", () => {
  const one = document.getElementById("1");
  const two = document.getElementById("2");
  const three = document.getElementById("3");
  const four = document.getElementById("4");
  const five = document.getElementById("5");
  const six = document.getElementById("6");
  const seven = document.getElementById("7");
  const eight = document.getElementById("8");
  const nine = document.getElementById("9");

  let toggle = true;
  let isFinished = false;
  let count = 0;
  let user1_array = [];
  let user2_array = [];

  one.addEventListener("click", () => {
    if (!isFinished) {
      if (toggle) {
        user1_array.push("1");
        let res = checkResult(user1_array);

        toggle = false;
        one.textContent = "X";
        if (res) alert("User 1 wins!");

        count++;
        isFinished = count === 9 || res == true;
      } else {
        user2_array.push("1");
        let res = checkResult(user2_array);

        toggle = true;
        one.textContent = "O";
        if (res) alert("User 2 wins!");
        count++;
        isFinished = count === 9 || res == true;
      }
      console.log(user1_array, user2_array, "1 clicked");
    }
  });
  two.addEventListener("click", () => {
    if (!isFinished) {
      if (toggle) {
        user1_array.push("2");
        let res = checkResult(user1_array);

        toggle = false;
        two.textContent = "X";
        if (res) alert("User 1 wins!");

        count++;
        isFinished = count === 9 || res == true;
      } else {
        user2_array.push("2");
        let res = checkResult(user2_array);

        toggle = true;
        two.textContent = "O";
        if (res) alert("User 2 wins!");
        count++;
        isFinished = count === 9 || res == true;
      }
      console.log(user1_array, user2_array, "2 clicked");
    }
  });
  three.addEventListener("click", () => {
    if (!isFinished) {
      if (toggle) {
        user1_array.push("3");
        let res = checkResult(user1_array);

        toggle = false;
        three.textContent = "X";
        if (res) alert("User 1 wins!");
        count++;
        isFinished = count === 9 || res == true;
      } else {
        user2_array.push("3");
        let res = checkResult(user2_array);

        toggle = true;
        three.textContent = "O";
        if (res) alert("User 2 wins!");
        count++;
        isFinished = count === 9 || res == true;
      }
      console.log(user1_array, user2_array, "3 clicked");
    }
  });
  four.addEventListener("click", () => {
    if (!isFinished) {
      if (toggle) {
        user1_array.push("4");
        let res = checkResult(user1_array);

        toggle = false;
        four.textContent = "X";
        if (res) alert("User 1 wins!");
        count++;
        isFinished = count === 9 || res == true;
      } else {
        user2_array.push("4");
        let res = checkResult(user2_array);

        toggle = true;
        four.textContent = "O";
        if (res) alert("User 2 wins!");
        count++;
        isFinished = count === 9 || res == true;
      }
      console.log(user1_array, user2_array, "4 clicked");
    }
  });
  five.addEventListener("click", () => {
    if (!isFinished) {
      if (toggle) {
        user1_array.push("5");
        let res = checkResult(user1_array);

        toggle = false;
        five.textContent = "X";
        if (res) alert("User 1 wins!");
        count++;
        isFinished = count === 9 || res == true;
      } else {
        user2_array.push("5");
        let res = checkResult(user2_array);

        toggle = true;
        five.textContent = "O";
        if (res) alert("User 2 wins!");
        count++;
        isFinished = count === 9 || res == true;
      }
      console.log(user1_array, user2_array, "5 clicked");
    }
  });
  six.addEventListener("click", () => {
    if (!isFinished) {
      if (toggle) {
        user1_array.push("6");
        let res = checkResult(user1_array);

        toggle = false;
        six.textContent = "X";
        if (res) alert("User 1 wins!");
        count++;
        isFinished = count === 9 || res == true;
      } else {
        user2_array.push("6");
        let res = checkResult(user2_array);

        toggle = true;
        six.textContent = "O";
        if (res) alert("User 2 wins!");
        count++;
        isFinished = count === 9 || res == true;
      }
      console.log(user1_array, user2_array, "6 clicked");
    }
  });
  seven.addEventListener("click", () => {
    if (!isFinished) {
      if (toggle) {
        user1_array.push("7");
        let res = checkResult(user1_array);

        toggle = false;
        seven.textContent = "X";
        if (res) alert("User 1 wins!");
        count++;
        isFinished = count === 9 || res == true;
      } else {
        user2_array.push("7");
        let res = checkResult(user2_array);

        toggle = true;
        seven.textContent = "O";
        if (res) alert("User 2 wins!");
        count++;
        isFinished = count === 9 || res == true;
      }
      console.log(user1_array, user2_array, "7 clicked");
    }
  });
  eight.addEventListener("click", () => {
    if (!isFinished) {
      if (toggle) {
        user1_array.push("8");
        let res = checkResult(user1_array);

        toggle = false;
        eight.textContent = "X";
        if (res) alert("User 1 wins!");
        count++;
        isFinished = count === 9 || res == true;
      } else {
        user2_array.push("8");
        let res = checkResult(user2_array);
        toggle = true;
        eight.textContent = "O";
        if (res) alert("User 2 wins!");
        count++;
        isFinished = count === 9 || res == true;
      }
      console.log(user1_array, user2_array, "8 clicked");
    }
  });
  nine.addEventListener("click", () => {
    if (!isFinished) {
      if (toggle) {
        user1_array.push("9");
        let res = checkResult(user1_array);
        toggle = false;
        nine.textContent = "X";
        if (res) alert("User 1 wins!");
        count++;
        isFinished = count === 9 || res == true;
      } else {
        user2_array.push("9");
        let res = checkResult(user2_array);

        toggle = true;
        nine.textContent = "O";
        if (res) alert("User 2 wins!");
        count++;
        isFinished = count === 9 || res == true;
      }
      console.log(user1_array, user2_array, "9 clicked");
    }
  });

  function checkResult(array) {
    //Check for winning conditions
    if (array.length < 3) {
      return false;
    } else {
      if (
        array.indexOf("1") != -1 &&
        array.indexOf("2") != -1 &&
        array.indexOf("3") != -1
      ) {
        return true;
      } else if (
        array.indexOf("4") != -1 &&
        array.indexOf("5") != -1 &&
        array.indexOf("6") != -1
      ) {
        return true;
      } else if (
        array.indexOf("7") != -1 &&
        array.indexOf("8") != -1 &&
        array.indexOf("9") != -1
      ) {
        return true;
      } else if (
        array.indexOf("1") != -1 &&
        array.indexOf("4") != -1 &&
        array.indexOf("7") != -1
      ) {
        return true;
      } else if (
        array.indexOf("2") != -1 &&
        array.indexOf("5") != -1 &&
        array.indexOf("8") != -1
      ) {
        return true;
      } else if (
        array.indexOf("3") != -1 &&
        array.indexOf("6") != -1 &&
        array.indexOf("9") != -1
      ) {
        return true;
      } else if (
        array.indexOf("1") != -1 &&
        array.indexOf("5") != -1 &&
        array.indexOf("9") != -1
      ) {
        return true;
      } else if (
        array.indexOf("3") != -1 &&
        array.indexOf("5") != -1 &&
        array.indexOf("7") != -1
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
});
