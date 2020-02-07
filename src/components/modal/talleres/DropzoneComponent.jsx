import React from 'react';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

const DropzoneComponent = (props) => {
    // specify upload params and url for your files
    const getUploadParams = ({ meta }) => { return { url: "https://httpbin.org/post" } }
    
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
    
    const handleSubmit = (files, allFiles) => {
      console.log(files.map(f => f.meta))
      allFiles.forEach(f => f.remove())
    }

    return (
      <Dropzone
        multiple={false}
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onDrop={acceptedFiles => console.log(acceptedFiles)}
        onSubmit={handleSubmit}
        inputContent = "Arrastra archivos o haz click para navegar"
        styles={{ dropzone: { minHeight: 150, overflow: "auto" } }}
        accept="image/*,audio/*,video/*"
      />
    )
}
export default DropzoneComponent;