export const getModalLabel = (selectedData) => {
    if (Object.keys(selectedData).length > 0) {
        return <h5 className="modal-title-label">{selectedData.label}</h5>
    }
    return <h5 className="modal-title-label">Add manual discount</h5>
}