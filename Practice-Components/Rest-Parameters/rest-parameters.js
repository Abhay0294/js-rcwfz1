function LinkedIn(param1, param2, ...restPararams) {
  var restParameters = restPararams;
  // let params = (restPararams) => {
  //   for (let i = 0; i < restPararams.length; i++) {
  //     restParameters.push(restPararams[i]);
  //   }
  // };
  // params(restPararams);
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
