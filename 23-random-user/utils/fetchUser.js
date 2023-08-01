const URL = "https://randomuser.me/api/"

const getUser = async () => {
  const response = await fetch(URL)
  const data = await response.json()
  // destructure
  const { email, phone } = data.results[0]
  const { large: image } = data.results[0].picture
  const { password } = data.results[0].login
  const { first, last } = data.results[0].name

  const { age } = data.results[0].dob
  // const {
  //   dob: { age },
  // } = data.results[0]
  // (ps: data also could be get in this way on all properties)

  const { number, name } = data.results[0].location.street
  // or this way:
  // const {
  //   street: { number, name },
  // } = data.results[0].location
  // (ps: another example with other property)
  return {
    image,
    phone,
    email,
    password,
    age,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  }
}

export default getUser
