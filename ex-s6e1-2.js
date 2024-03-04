/// exercicio 1
function isEven(number) {
    let message
    const even = new Promise((resolve, reject) => {
        if (parseFloat(number) % 2 == 0) {
            resolve("Número validado é par")
        } else {
            reject("Error: número informado é impar")
        }
    })
    even.then((value) => {
        console.log(value)
    }).catch((error) => {
        console.log(error)
    })
}
isEven(2)

// exercicio 2
async function fakeFetch(url, option) {
    const userData = {
        nome: 'Herbert',
        idade: 35,
        email: 'herbert@mail.com'
    };
    return userData

}


async function getUserInfo(user) {
    const url = `https://myfakeapi.com/${user}`
    const options = {
        method: "GET",
    }

    const request = await fakeFetch(url, options)

    let userData = request //await request.json()

    return userData
}

async function displayUserInfo(user) {

    let userData = await getUserInfo(user)

    const fakeUser = {
        nome: userData.nome,
        idade: userData.idade,
        email: userData.email,
    }
    console.log("Sending http request")
    setTimeout(() => {

        console.log(fakeUser.nome)
        console.log(fakeUser.idade)
        console.log(fakeUser.email)
        console.log("Request time : 2000ms")
    }, 2000)

}
displayUserInfo("Herbert")

// exercicio 04

