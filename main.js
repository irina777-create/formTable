//Реалізовуємо форму для реєстрації.
// Поля:
// Ім'я, Прізвище (Текстові поля)
// Дата народження (Текстове поле)
// Стать (radio)
// Місто (select)
// Адреса (textarea)
// Мови, якими володіє (checkbox)
// ….
// Кнопка “Зберегти”
// За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.

function handleFormSubmit(event) {
    event.preventDefault()
    console.log('Отправка!')
}

const applicantForm = document.getElementById('once')
applicantForm.addEventListener('submit', handleFormSubmit)

function serializeForm(formPode) {
    console.log(formPode.elements)
}

function handleFormSubmit(event) {
    event.preventDefault()
    serializeForm(applicantForm)
}

const applicantForm = document.getElementById('once')
applicantForm.addEventListener('submit', handleFormSubmit)


function serializeForm(formPode) {
    const { elements } = formPode

    Array.from(elements)
        .forEach((element) => {
            const { name, value } = element
            console.log({ name, value })
        })
}

function serializeForm(formPode) {
    const { elements } = formPode
    const data = Array.from(elements)
        .filter((item) => !!item.name)
        .map((element) => {
            const { name, value } = element

            return { name, value }
        })

    console.log(data)
}
function serializeForm(formPode) {
    const { elements } = formPode

    const data = Array.from(elements)
        .map((element) => {
            const { name, type } = element
            const value = type === 'checkbox' ? element.checked : element.value

            return { name, value }
        })
        .filter((item) => !!item.name)

    console.log(data)
}

const isOn = someCheckboxInput.checked
function serializeForm(formPode) {
    const { elements } = formPode

    const data = Array.from(elements)
        .map((element) => {
            const { name, type } = element
            const value = type === 'checkbox' ? element.checked : element.value

            return { name, value }
        })
        .filter((item) => !!item.name)

    console.log(data)
}




