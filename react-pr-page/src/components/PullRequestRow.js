import { useState } from 'react'

const PullRequestRow = ({ pr }) => {
    return (
        <div className='pr-row'>
            <input
                name="pr-check"
                type="checkbox"
            />
            <p>
                <b>[PROD-{Math.floor(Math.random()*5000)}] {pr.name}</b>
            </p>
            <p className='pr-email'>Opened by {pr.email}</p>
        </div>
    )
}

export default PullRequestRow;