var data = [
    {
        id: 1,
        username: "punit",
        comment: "my comment ",
        parent: null
    },
    {
        id: 2,
        username: "cogun",
        comment: "my comment 2",
        parent: "punit"
    },
    {
        id: 6,
        username: "poi",
        comment: "my comment 4",
        parent: "cogun"
    },
    {
        id: 6,
        username: "zop",
        comment: "i replkied to poi",
        parent: "poi"
    },
    {
        id: 3,
        username: "super",
        comment: "my comment 3",
        parent: "punit",
    },
    {
        id: 4,
        username: "qw12",
        comment: "nw comment",
        parent: null
    },
    {
        id: 5,
        username: "rt45",
        comment: "23nw comment",
        parent: "qw12"
    },
]
var indent = 0
function getObjectByProp(prop, val) {
    var d = {}
    data.forEach(i => {
        if (i[prop] == val) {
            d = i
        }
    });
    return d
}

function recur(parent) {
    var x = getObjectByProp("parent", parent)
    if (Object.getOwnPropertyNames(x).length === 0) {
        indent = 0
        return
    }
    indent += 15
    console.log("indent is " + indent)
    console.log(x)
    renderComment(x.username, x.comment, indent)
    recur(x.username)
}

function Comment(username) {
    // var x = getObjectByProp("parent", username)
    data.forEach(i => {
        if (i.parent == username) {
            indent += 15
            console.log("indent is " + indent)
            renderComment(i.username, i.comment, indent)
            console.log(i)
            recur(i.username)
        }
    });
}

data.forEach(i => {
    if (i.parent == null) {
        console.log(i.comment)
        indent = 0
        console.log("indent is " + indent)
        renderComment(i.username, i.comment, indent)
        Comment(i.username)
    }
});

function renderComment(username, text, margin) {
    var m = `
    <div class="p-3 m-1 shadow-sm text-stone-500 border rounded-lg" style="margin-left:${margin}px">
        <p class="text-sm">${username}</p>
        ${text}
    </div>
    `
    $(".comments").append(m)
}
