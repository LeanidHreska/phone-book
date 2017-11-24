const initialState = {
  contactArray: [
    {
      id: 1,
      imgUrl: "https://goo.gl/ikPF3r",
      name: 'ivan',
      phoneNumber: 375441234567
    },
    {
      id: 2,
      imgUrl: "https://goo.gl/ikPF3r",
      name: 'leha',
      phoneNumber: 375447654321
    }
  ]
};

export default function userstate(state = initialState) {
  return state;
}