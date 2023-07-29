function bonusTime(salary, bonus) {
  return bonus === true ? `$${salary * 10}`: `$${salary}`;
  }

  console.log(bonusTime(10000, true));
  console.log(bonusTime(10000, false));