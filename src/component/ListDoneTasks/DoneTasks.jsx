import React, { Fragment } from "react";
import "../Css/ForComponent.css";

const DoneTasks = ({ textempty, name, description, delet1, classchangecolordec }) => {
    console.log(textempty, name)
    return (
        <Fragment>
            {(textempty === undefined) ? (
                <div className="d-flex flex-column m-auto justify-content-center align-items-center">
                    <div className="container m-auto">
                        <div style={{ background: "#a0fea0", borderRadius: "13px" }} className="row d-flex mt-3 mx-2 p-2 shadow" >
                            <div className="col-11 col-lg-11 col-md-11 col-sm-11">
                                <h5 className="w-50 nametodof rounded p-2 shadow divnametodof">{name}</h5>
                                <p className="descriptiontodo p-1">{description}</p>
                            </div>

                            <div className="col-1 col-lg-1 col-md-1 col-sm-1">
                                <p onClick={delet1} className="deleticonlight fs-5">&#10006;</p>
                            </div>
                        </div>
                        <div>
                        </div>
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