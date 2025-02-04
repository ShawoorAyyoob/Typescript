const arr1: number[] = [11, 9, 2];
const arr2: number[] = [0, 0, 4];
const combinedArr: number[] = [...arr1, ...arr2];
console.log(combinedArr);

const userObj = {
  id: 10,
  name: "Sulaiman",
};
const userProfileObj = {
  age: 20,
  occupation: "Web Developer",
};
const userCompleteObj = { ...userObj, ...userProfileObj };
console.log(userCompleteObj);