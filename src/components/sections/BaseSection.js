import React from 'react'

const BaseSection = (className,content) => {

    return (
        <section className={className} >
            <div className="container-fluid">
                <div className="row">
                    {content}
                </div>
            </div>
        </section>
    )
}

export default BaseSection;