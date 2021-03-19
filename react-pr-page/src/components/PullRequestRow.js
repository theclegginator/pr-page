const PullRequestRow = ({ pr, randomNum, rowIsVisible, searchTerm }) => {

    return (
        <>
        {/* display row if 'rowIsVisible' or searchTerm is null (no current search) */}
        {(rowIsVisible || !searchTerm) && 
            <div className='pr-row'>
                <input
                    name="pr-check"
                    type="checkbox"
                />
                <p>
                    <b>[PROD-{randomNum}] {pr.name}</b>
                </p>
                <p className='pr-email'>Opened by {pr.email}</p>
            </div>
        }
        </>
    )
}

export default PullRequestRow;