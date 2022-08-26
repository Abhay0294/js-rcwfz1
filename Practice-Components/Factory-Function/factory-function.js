/*
 * The requirement is to create 10 user objects dynamically
 */

const name = '';
const avatar = '';

const createUser = () => ({
  name,
  avatar,
  setUserName(Name) {
    this.name = Name;
    return this;
  },
  setUserAvatar(Avatar) {
    this.avatar = Avatar;
    return this;
  },
});

const UserName = [
  'Abhay',
  'Sumit',
  'Ajay',
  'Shaloo',
  'Krishna',
  'Vikas',
  'Nitin',
  'Lokesh',
];

for (let i = 0; i < UserName.length; i++) {
  console.log(
    createUser().setUserName(UserName[i]).setUserAvatar('Avatar.png')
  );
}

// console.log(createUser().name);
