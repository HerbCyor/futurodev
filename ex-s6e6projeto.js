// localStorage object
// keys : cep,logradouro,complemento,bairro,localidade, uf

const messages = {
    zipcodeExists: "Você já possui um CEP em nosso banco de dados. \n Gostaria de informar um CEP novo? ",
    promptZipcode: "Informe o CEP para consulta: ",
    resultZipcode: "Informações do CEP ",
    checkInfoZipcode: "As informações estão corretas? "
}

function checkStorageForAddress() {
    const address = localStorage.getItem("endereco")

    if (!address) {
        return false
    }

    return JSON.parse(address)
}

function updateZipcode() {
    let answer = confirm(messages.zipcodeExists) // window.alert
    return answer
}

function queryNewZipcode() {
    let answer = window.prompt(messages.promptZipcode)
    return answer

}
function saveAddressToLocalStorage(address) {
    localStorage.setItem("endereco", JSON.stringify(address))
}

function displayAddress(address) {

    let display = document.getElementById("address")
    const text = document.createTextNode(JSON.stringify(address))
    display.appendChild(text)
}

function checkAddressInfo(address) {

    const addressInfo = `\n${address.cep}\n${address.logradouro}\n${address.complemento}\n${address.bairro}\n${address.localidade}-${address.uf}\n`
    let answer = confirm(messages.checkInfoZipcode + addressInfo) // window.alert
    return answer
}

async function fetchAddress(zipcode) {

    let url = `https://viacep.com.br/ws/${zipcode}/json/`
    const options = { method: "GET", }


    const response = await fetch(url, options)
    const data = await response.json()
    const address = {
        cep: data.cep,
        logradouro: data.logradouro,
        complemento: data.complemento,
        bairro: data.bairro,
        localidade: data.localidade,
        uf: data.uf,
    }
    return address
}

async function main() {
    let storedAddress = checkStorageForAddress()

    if (!storedAddress) {
        const new_zipcode = queryNewZipcode()
        const address = await fetchAddress(new_zipcode)


        if (checkAddressInfo(address)) {
            saveAddressToLocalStorage(address)
            displayAddress(address)
        } else {
            localStorage.removeItem("endereco")
            main() // I will refactor this later
        }

    } else {
        if (!updateZipcode()) {
            displayAddress(storedAddress)
        } else {
            const new_zipcode = queryNewZipcode()
            const address = await fetchAddress(new_zipcode)

            if (checkAddressInfo(address)) {
                saveAddressToLocalStorage(address)
                displayAddress(address)
            } else {
                localStorage.removeItem("endereco")
                main() // I will refactor this later
            }
        }
    }
}
main()