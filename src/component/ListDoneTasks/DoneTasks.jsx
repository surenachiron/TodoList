import React, { Fragment } from "react";
import "../Css/ForComponent.css";

const DoneTasks = ({ textempty, name, description, delet1, classchangecolordec }) => {
    console.log(textempty, name)
    return (
        <Fragment>
            {(textempty === undefined) ? (
                <div className="container m-auto d-flex align-items-center justify-content-center mt-2">
                    <div style={{ background: "#a0fea0", borderRadius: "13px" }} className="row d-flex mt-3 mx-2 p-3 shadow col-12 col-lg-9" >
                        <div className="col-11 col-lg-11 col-md-10 col-sm-10">
                            <h5 className="col-8 nametodof rounded p-2 shadow divnametodof">{name}</h5>
                            <p className="descriptiontodo p-1">{description}</p>
                        </div>

                        <div className="col-1 col-lg-1 col-md-2 col-sm-2">
                            <p onClick={delet1} role="button" className="text-danger fs-5">&#10006;</p>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            ) :
                (<div className="d-flex align-items-center justify-content-center mx-5" style={{ height: "45vh" }}>
                    <div className="p-5 border rounded">
                        <h3 className={`${classchangecolordec}`}>{textempty}</h3>
                    </div>
                </div>)
            }
        </Fragment>
    )
}

export default DoneTasks