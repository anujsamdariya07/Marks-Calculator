const calculateFormElement = document.getElementById('calculate-form')
const calculateMarks = (event) => {
    const maxMarks = 400
    
    event.preventDefault()

    const formData = new FormData(calculateFormElement)
    const data = {}
    formData.forEach((value, key) => {
        data[key] = +value
    })

    const totalMarks = data.math + data.science + data.hindi + data.english
    const percentage = Math.round(((totalMarks/maxMarks) * 100) * 100)/100
    console.log(percentage)

    const resultElement = document.createElement('p')
    resultElement.innerText = `You have got ${totalMarks} out of ${maxMarks} and your percentage is ${percentage}%.`
    resultElement.className = 'result'
    calculateFormElement.after(resultElement)
}