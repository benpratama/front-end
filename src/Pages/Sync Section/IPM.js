import React, {useState} from 'react';
import '../../App.css';

function IPM (){
    // Cek upload DOCKERFILE
    const [selectedFile, setSelectedFile] = useState(null);

    // State untuk masing-masing Dockerfile
    const [dataProcessingDocker, setDataProcessingDocker] = useState(null);
    const [guiDocker, setGuiDocker] = useState(null);
    const [parserServiceDocker, setParserServiceDocker] = useState(null);
    const [serviceDocker, setServiceDocker] = useState(null);
    const [tokenDocker, setTokenDocker] = useState(null);

    // State untuk masing-masing Zip File
    const [dataProcessingFile, setDataProcessingFile] = useState(null);
    const [guiFile, setGuiFile] = useState(null);
    const [parserServiceFile, setParserServiceFile] = useState(null);
    const [serviceFile, setServiceFile] = useState(null);
    const [tokenFile, setTokenFile] = useState(null);
    //     if (!dataProcessingDocker && !guiDocker && !parserServiceDocker &&
    //         !serviceDocker && !tokenDocker
    //     ) {
    //       alert("Pastikan kedua file telah dipilih!");
    //       return;
    //     }

    //     if (!dataProcessingFile && !guiFile){
    //         alert("Pastikan Zip file telah dipilih!");
    //       return;
    //     }
    //     // Buat FormData dan tambahkan file sesuai key (yang akan digunakan server)
    //     const formData = new FormData();
    //     // DOCKERFILE
    //     formData.append("DataProcessingDocker", dataProcessingDocker);
    //     formData.append("GUIDocker", guiDocker);
    //     formData.append("ParserServiceDocker", parserServiceDocker);
    //     formData.append("ServiceDocker", serviceDocker);
    //     formData.append("TokenDocker", tokenDocker);
    
    //     try {
    //       const response = await fetch("http://localhost:8003/upload/upload", {
    //         method: "POST",
    //         body: formData,
    //       });
    //       if (response.ok) {
    //         alert("File berhasil diupload dan disimpan ke server.");
    //       } else {
    //         alert("Terjadi kesalahan saat upload file.");
    //       }
    //     } catch (error) {
    //       console.error(error);
    //       alert("Terjadi error: " + error.message);
    //     }
    // };

    // // Zip File
    // const handleFileChange2 = (e) => {
    //     const file = e.target.files[0];

    //     if (e.target.id === "DataProcessingFile") {
    //         setDataProcessingFile(file);
    //     } else if (e.target.id === "GUIFile") {
    //         setGuiFile(file);
    //     }else if (e.target.id === "ParserFile") {
    //         setParserServiceFile(file);
    //     }else if (e.target.id === "ServiceFile") {
    //         setServiceFile(file);
    //     }else if (e.target.id === "TokenFile") {
    //         setTokenFile(file);
    //     }
    // };

    // const handleUpload2 = async () => {
    //     const formData2 = new FormData();
    //     // DOCKERFILE
    //     formData2.append("DataProcessingFile", dataProcessingFile);
    //     formData2.append("GUIFile", guiFile);
    //     formData2.append("ParserFile", parserServiceFile);
    //     formData2.append("ServiceFile", serviceFile);
    //     formData2.append("TokenFile", tokenFile);


    //     try {
    //       const response = await fetch("http://localhost:8003/upload/upload2", {
    //         method: "POST",
    //         body: formData2,
    //       });
    //       if (response.ok) {
    //         alert("File berhasil diupload dan disimpan ke server.");
    //       } else {
    //         alert("Terjadi kesalahan saat upload file.");
    //       }
    //     } catch (error) {
    //       console.error(error);
    //       alert("Terjadi error: " + error.message);
    //     }
    // };
    
    // Untuk input Dockerfile-runtime
    
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const id = e.target.id;
        
        // Untuk input Dockerfile (harus bernama "Dockerfile-runtime")
        if (id === "DataProcessingDocker" || id === "GUIDocker" || id === "ParserServiceDocker" || id === "ServiceDocker" || id === "TokenDocker" ) {
          if (file.name !== "Dockerfile-runtime") {
            alert("Hanya file dengan nama 'Dockerfile-runtime' yang diperbolehkan!");
            e.target.value = null;
            return;
          }
          if (id === "DataProcessingDocker") {
            setDataProcessingDocker(file);
          } else if(id === "GUIDocker") {
            setGuiDocker(file);
          } else if(id === "ParserServiceDocker") {
            setParserServiceDocker(file);
          } else if(id === "ServiceDocker") {
            setServiceDocker(file);
          } else if(id === "TokenDocker") {
            setTokenDocker(file);
          }
        }
        // Untuk input ZIP
        else if (id === "DataProcessingFile" || id === "GUIFile" || id === "ParserFile" || id === "ServiceFile" || id === "TokenFile") {
          if (!file.name.toLowerCase().endsWith(".zip")) {
            alert("Hanya file ZIP yang diperbolehkan!");
            e.target.value = null;
            return;
          }
          if (id === "DataProcessingFile") {
            setDataProcessingFile(file);
          } else if(id === "GUIFile") {
            setGuiFile(file);
          } else if(id === "ParserFile") {
            setParserServiceFile(file);
          } else if(id === "ServiceFile") {
            setServiceFile(file);
          } else if(id === "TokenFile") {
            setTokenFile(file);
          }
        }
    };
    const handleUpload = async () => {
        // Validasi: pastikan kedua file untuk masing-masing grup telah dipilih
    
        // Gabungkan semua file ke dalam satu FormData
        const formData = new FormData();
        if (dataProcessingDocker) formData.append("DataProcessingDocker", dataProcessingDocker);
        if (dataProcessingFile) formData.append("DataProcessingFile", dataProcessingFile);

        if (guiDocker) formData.append("GUIDocker", guiDocker);
        if (guiFile) formData.append("GUIFile", guiFile);

        if (parserServiceDocker) formData.append("ParserServiceDocker", parserServiceDocker);
        if (parserServiceFile) formData.append("ParserFile", parserServiceFile);

        if (serviceDocker) formData.append("ServiceDocker", serviceDocker);
        if (serviceFile) formData.append("ServiceFile", serviceFile);

        if (tokenDocker) formData.append("TokenDocker", tokenDocker);
        if (tokenFile) formData.append("TokenFile", tokenFile);
    
        try {
          const response = await fetch("http://localhost:8003/upload/upload", {
            method: "POST",
            body: formData,
          });
          if (response.ok) {
            alert("File berhasil diupload dan diproses di server.");
          } else {
            alert("Terjadi kesalahan saat upload file.");
          }
        } catch (error) {
          console.error(error);
          alert("Terjadi error: " + error.message);
        }
    };

    return(
        <>
            {/* DATA PROCESSING */}
            <div className='row my-2 justify-content-center'>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className='sub_title col-md-3 mb-3'>
                            Dockerfile Data Processing
                        </div>
                        <div class="input-group mb-3">
                            <input type="file" class="form-control" id="DataProcessingDocker" onChange={handleFileChange}></input>
                            <label class="input-group-text" for="DataProcessingDocker">Upload</label>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className='sub_title col-md-3 mb-3'>
                            Data Processing File
                        </div>
                        <div class="input-group mb-3">
                            <input type="file" class="form-control" id="DataProcessingFile" accept=".zip" onChange={handleFileChange} ></input>
                            <label class="input-group-text" for="DataProcessingFile">Upload</label>
                        </div>
                    </div>
            </div>

            {/* GUI */}
            <div className='row my-2 justify-content-center'>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className='sub_title col-md-3 mb-3'>
                        Dockerfile GUI
                    </div>
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" id="GUIDocker" onChange={handleFileChange}></input>
                        <label class="input-group-text" for="GUIDocker">Upload</label>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className='sub_title col-md-3 mb-3'>
                        GUI File
                    </div>
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" id="GUIFile" accept=".zip" onChange={handleFileChange}></input>
                        <label class="input-group-text" for="GUIFile">Upload</label>
                    </div>
                </div>
            </div>

            {/* Parser Service */}
            <div className='row my-2 justify-content-center'>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className='sub_title col-md-3 mb-3'>
                        Dockerfile Parser Service
                    </div>
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" id="ParserServiceDocker" onChange={handleFileChange}></input>
                        <label class="input-group-text" for="ParserServiceDocker">Upload</label>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className='sub_title col-md-3 mb-3'>
                        Parser Service File
                    </div>
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" id="ParserFile" accept=".zip" onChange={handleFileChange}></input>
                        <label class="input-group-text" for="ParserFile">Upload</label>
                    </div>
                </div>
            </div>

            {/* Service */}
            <div className='row my-2 justify-content-center'>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className='sub_title col-md-3 mb-3' >
                        Dockerfile Service
                    </div>
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" id="ServiceDocker" onChange={handleFileChange}></input>
                        <label class="input-group-text" for="ServiceDocker">Upload</label>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className='sub_title col-md-3 mb-3'>
                        Service File
                    </div>
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" id="ServiceFile" accept=".zip" onChange={handleFileChange}></input>
                        <label class="input-group-text" for="ServiceFile">Upload</label>
                    </div>
                </div>
            </div>

            {/* Token Server */}
            <div className='row my-2 justify-content-center'>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className='sub_title col-md-3 mb-3'>
                        Dockerfile Token Server
                    </div>
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" id="TokenDocker" onChange={handleFileChange}></input>
                        <label class="input-group-text" for="TokenDocker">Upload</label>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className='sub_title col-md-3 mb-3'>
                        Token Server File
                    </div>
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" id="TokenFile" accept=".zip" onChange={handleFileChange}></input>
                        <label class="input-group-text" for="TokenFile">Upload</label>
                    </div>
                </div>
            </div>

            <hr className='hrborder2'/>

            {/* Message */}
            <div className='row my-2'>
                <div className="col-md-12 d-flex justify-content-center align-items-center">
                    <div className='sub_title col-md-1 mb-3'>
                        Message sync
                    </div>
                    <div class="input-group">
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>
                </div>
            </div>
            <div className='row my-2'>
                <div className=" d-flex justify-content-center align-items-center">
                    <button type="button" class="btn btn-success" onClick={handleUpload}>Sync</button>
                </div>
            </div>
            
        </>
    )
}

export default IPM