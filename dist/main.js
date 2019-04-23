const send = async function () {
    let thing = $("input").val()
    let t1 = { text: thing }
    let post = await $.post(`/thing/`, t1)
    $("#cont").append(`<div>${post.text}</div>`)
}

const load = async function () {
    let things = await $.get(`/things`)
    for (let thing of things) {
        $("#cont").append(`<div>${thing.text}</div>`)
    }
}

load()