import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

export const suspenseFallbackLoader = () => {
    return (
        <div style={{ marginTop: "18%", marginLeft: "45%", position: "fixed" }}>
            <PulseLoader
                color={"#36d7b7"}
                loading={true}
                size={50}
            />
        </div>
    );
};