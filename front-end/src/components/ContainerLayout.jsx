// ContainerLayout.js
import React from "react";
import { Outlet } from "react-router-dom";

const ContainerLayout = () => {
    return (
        <div className="main">
            <div className="main-container">
                <div class="playlist-container">
                    <div className="offer__scroll-container">
                        {/* 
        Aqui você pode adicionar cabeçalhos, barras laterais ou qualquer outro elemento 
        que seja comum às páginas dentro deste container.
      */}
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContainerLayout;
