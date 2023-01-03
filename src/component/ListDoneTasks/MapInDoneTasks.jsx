import React, { Fragment, useContext } from "react";
import DoneTasks from "./DoneTasks";
import Context from "../../contexapi/Context";

const MapInDoneTasks = () => {

    const context = useContext(Context)

    return (
        <Fragment>
            {context.Donetaskss.length === 0 ? (
                <DoneTasks
                    textempty="شما تاکنون هیچ کاری را کامل نکرده اید."
                >
                </DoneTasks>
            )
                :
                (
                    context.Donetaskss.map(p => (
                        <DoneTasks
                            name={p.namework}
                            description={p.descriptionwork}
                            delet1={() => context.deletitemfordonetask(p.id)}
                        >
                        </DoneTasks>
                    ))
                )}
        </Fragment>
    )
}


export default MapInDoneTasks