import React, { useRef } from "react"
import { useState } from "react";

const FileUploader = ({ onFileSelect, onFileInput }) => {
    const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME;
    const UPLOAD_PRESET = process.env.REACT_APP_UPLOAD_PRESET;

    const fileInput = useRef(null);    
    
    const handleFileInput = async (e) => {
        onFileSelect(e.target.files[0]);
        const data = new FormData();
        data.append("file", e.target.files[0]);
        data.append("upload_preset", UPLOAD_PRESET);
        const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload/`,
        { method: "POST", body: data }
        );
        const info = await response.json();
        onFileInput(info.url);        
        console.log(info);
    };

    return (
        <div>
            <input type="file" onChange={handleFileInput} name = "image" />
            <button onClick={e => fileInput.current && fileInput.current.click()} />
        </div>
    )
}

export default FileUploader;