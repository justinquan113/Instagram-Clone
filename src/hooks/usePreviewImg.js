import React from "react"
function usePreviewImg(){
    const [selectedFile, setSelectedFile] = React.useState(null)
    const maxFileSizeInBytes = 2 * 1024 * 1024// 2MB

    function handleImageChange(e){
        const file = e.target.files[0]
        if(file && file.type.startsWith("image/")){
            if (file.size > maxFileSizeInBytes){
                alert("Error, File size must be less than 2MB")
                setSelectedFile(null)
                return
            }
            const reader = new FileReader()
            reader.onloadend = () => {
                setSelectedFile(reader.result)
            }

            reader.readAsDataURL(file)
        }
        else{
            alert("Please select a file image")
            setSelectedFile(null)
        }
    }
    return {selectedFile, handleImageChange, setSelectedFile}
}

export default usePreviewImg