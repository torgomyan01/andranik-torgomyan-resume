import React from 'react';

function PrintBlock() {
    function printPage() {
        window.print();
    }
    return (
        <div className="print-block" onClick={printPage}>
            <i className="fas fa-print" />
        </div>
    );
}

export default PrintBlock;
