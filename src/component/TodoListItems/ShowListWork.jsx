import React, { Fragment } from "react";
import "../Css/ForComponent.css";

const ShowListWork = ({ namework, description, deleted, edit, edit1, donetasks, classblock, iddd, confirm, classhidecontent, classchangecolordec, classdeleticon, disaplededit, textempty }) => {

    return (
        <Fragment>
            {(textempty === undefined) ? (
                <div className="container">
                    <div style={{ boxShadow: "0px 0px 2px 0px #ffffff", borderRadius: "6px" }} className="row mt-3">
                        <div className="col-12 col-lg-10 col-md-12 col-sm-12 m-auto d-flex p-2 align-items-center row" >

                            <div className="col-6 col-lg-2 col-md-2 col-sm-6 order-2 order-sm-2 d-flex justify-content-lg-center justify-content-md-right">
                                <input type="button" value="انجام شد" onClick={donetasks} className="btn btn-md btn-warning" />
                            </div>

                            <div className={`d-flex flex-column col-12 col-lg-8 col-md-8 col-sm-12 order-1 order-lg-2 order-md-2 order-sm-1 ${classhidecontent}`}>
                                <h5 style={{ color: "#db366b", textAlign: "right" }} className="mb-2">{namework}</h5>
                                <p className={`descriptiontodo ${classchangecolordec}`}>{description}</p>
                            </div>

                            <div className={`d-flex flex-column col-12 col-lg-8 col-md-8 col-sm-12 order-1 order-lg-2 order-md-2 order-sm-1 ${classblock}`}>
                                <input className="mb-3 p-2 rounded" type="text" onChange={edit} value={namework} style={{ border: "1px solid #e3e3e3" }} />
                                <input className="mb-3 p-2 rounded" type="text" onChange={edit1} value={description} style={{ border: "1px solid #e3e3e3" }} />
                                <button onClick={confirm} className={`btn btn-success`}>تایید</button>
                            </div>

                            <div className="col-6 col-lg-2 col-md-2 col-sm-6 justify-content-end d-flex order-3 mt-3">
                                <div onClick={iddd} className="mt-3">
                                    {disaplededit}
                                </div>
                                <p className="mt-3">
                                    <p onClick={deleted} className={`${classdeleticon} fs-5`}>&#10006;</p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
                :
                (<div className="d-flex align-items-center justify-content-center mx-5" style={{ height: "45vh" }}>
                    <div className="p-5 border rounded">
                        <h3 className={`${classchangecolordec}`}>{textempty}</h3>
                    </div>
                </div>
                )
            }
        </Fragment>
    )
}


export default ShowListWork;