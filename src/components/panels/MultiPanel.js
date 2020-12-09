


import React from 'react';
const MultiPanel = (panelsPerRow,cellClassArray,contentArray) => {
    let rowContent=""
    const PanelSplitter = () => {
        let i,j,rowContentChunk,rowCellClassChunk;
        let res=""
        for (i=0,j=contentArray.length; i<j; i+=panelsPerRow) {
            rowContentChunk = contentArray.slice(i,i+panelsPerRow);
            rowCellClassChunk = cellClassArray.slice(i,i+panelsPerRow);
            res= <><>{res}</><>{RenderRow(rowContentChunk,rowCellClassChunk)}</></>
        }
        return res;
    }

    const panelItem = (rowArrayItem,cellClass) => {
        if(cellClass!==null)
            cellClass = " " + cellClass;
        const panelRes = <div className={"col"+cellClass}>
            <span className="table-content">{rowArrayItem}</span>
        </div>
        rowContent = <><>{rowContent}</><>{panelRes}</></>
    }

    const Renderrow w-100 = (rowContentChunk,rowCellClassChunk) => {
        rowContent=""
        rowContentChunk.map((rowArrayItem,index) =>  panelItem(rowArrayItem,rowCellClassChunk[index]));
        return(
            <div className="row">
                {rowContent}
            </div>
        )
    }

    return (
        <div className="container-fluid">
            {PanelSplitter()}
        </div>
    )
}

export default MultiPanel;
