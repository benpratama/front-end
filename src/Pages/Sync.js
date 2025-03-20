import React, { useState, Component } from 'react';
import '../App.css';


// Section
import Default from "./Sync Section/DefaultSection";
import IPM from "./Sync Section/IPM";
import AVM from "./Sync Section/AVM"

const Sync = ()=>{
    const [activeSection, setActiveSection] = useState("none");
    console.log(activeSection)

    return(
        <>
            {/* JUDUL */}
            <div className='row'>
                <div className='box_head_title p_center' style={{fontSize:"3rem"}}>
                  <span>Dockerfile & Manufacturing Service</span>
                </div>
            </div>
            
            {/* SELECT PROJECT */}
            <div className="top-section">
                <div className='row my-4 '>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <span className="sub_title nowrap" style={{fontSize:"1.5rem"}}>Select Project</span>
                        <div className="input-group mb-3">
                            
                            <select className="form-select" id="project"
                             value={activeSection}
                             onChange={(e) => setActiveSection(e.target.value)}
                            >
                            <option selected value="none" disabled>Choose...</option>
                            <option value="IPM">IPM</option>
                            <option value="AVM">AVM</option>
                            </select>
                            <label className="input-group-text" htmlFor="project">Project</label>
                        </div>
                    </div>
                </div>
            </div> 
            <hr className='hrborder'/>

            {/* SECTION */}
            <div className='row'>
                {activeSection === "none" && <Default />}
                {activeSection === "IPM" && <IPM />}
                {activeSection === "AVM" && <AVM />}
            </div>
            
            
        </>
    )
}

export default Sync