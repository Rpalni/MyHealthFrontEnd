export const getAllImages = () => {
    return dispatch => {
        fetch("http://localhost:3000/images")
            .then(res => res.json())
            .then(data => dispatch(getImages(data)))
    }
}
const getImages = (images) => {
    return { type: "GET_IMAGES", payload: images }
}

export const getImageDetails = (id) => {
    return dispatch => {
        fetch("http://localhost:3000/images/" + id)
            .then(res => res.json())
            .then(data => dispatch(getImage(data)))
    }
}
const getImage = (image) => {
    return { type: "GET_IMAGE", payload: image }
}


export const addImage = (title, imagename, description) => {
    return dispatch => {
        fetch("http://localhost:3000/images", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                imagename: imagename,
                description: description

            })
        })
            .then(res => res.json())
            .then(data => dispatch(addNewImage(data)))
    }
}
const addNewImage = (newImage) => {
    return { type: "ADD_IMAGE", payload: newImage }
}