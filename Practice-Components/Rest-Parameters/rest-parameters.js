function LinkedIn(param1, param2, ...restPararams) {
  var restParameters = restPararams;

  console.log(restParameters);
  console.log(param1);
  console.log(param2);
}

LinkedIn(
  'Name',
  'Occupation',
  'Description',
  'Experience',
  'Skills',
  'Achievements'
);
