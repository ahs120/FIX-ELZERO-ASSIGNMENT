checker = (zName) => {
  return (status) => {
    return (salary) => {
      return status === "Available"
        ? `${zName}, My salary is  ${salary} `
        : `Iam Not avaialble`;
    };
  };
};
console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
