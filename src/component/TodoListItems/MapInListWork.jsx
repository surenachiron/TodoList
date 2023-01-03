import React, { Fragment, useContext } from "react";
import ShowListWork from "./ShowListWork";
import Context from "../../contexapi/Context";


const MapInListWork = ({ classeditblock, classhidecontent, classediticon, classdeleticon }) => {

   const context = useContext(Context)

   return (
      <Fragment>
         {context.TODOLISTcontext.length === 0 ? (
            <ShowListWork
               textempty="شما هیچ فعالیتی را برای خود تعیین نکرده اید"
               classchangecolordec={context.classess.map(p => p.changecolordescription)}
            >
            </ShowListWork>
         ) : (
            <div className="d-flex flex-column m-auto justify-content-center align-items-center mt-4">
               {context.TODOLISTcontext.map(o => (
                  <ShowListWork
                     namework={o.namework}
                     description={o.descriptionwork}
                     deleted={() => context.tododelitofthelist(o.id)}
                     edit={(event) => context.editname(event, o.id)}
                     edit1={(event) => context.editdescription(event, o.id)}
                     donetasks={() => context.partdonetask(o.id)}
                     showedit={() => context.showehideedittodo()}
                     iddd={() => context.Hidelistitemsexceptonea(o.id)}
                     confirm={() => context.buttonconfirmforedit()}
                     classblock={context.classess.map(p => p.editpush)}
                     classhidecontent={context.classess.map(p => p.edithidecontent)}
                     disaplededit={context.classess.map(p => p.disableiconedit)}
                     classchangecolordec={context.classess.map(p => p.changecolordescription)}
                     classediticon={context.classess.map(p => p.editicon)}
                     classdeleticon={context.classess.map(p => p.deleticon)}
                  >
                  </ShowListWork>
               ))}
            </div>
         )}
      </Fragment>
   )
}


export default MapInListWork;