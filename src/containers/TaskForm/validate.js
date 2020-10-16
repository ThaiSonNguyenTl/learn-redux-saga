const validate = values => {
    // console.log(values)
    const errors = {}
    const {title} = values
    if(!title){
        errors.title = "Please enter the title !"
    } else if(title.trim().length < 5){
        errors.title = "Title must be at least 5 characters"
    }
    return errors
    
}

export default validate