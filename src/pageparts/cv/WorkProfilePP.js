import TransMultiPRM from '../../components/textProcessor/TransMultiPRM';
import TransMultiSection from '../../components/textProcessor/TransMultiSection';
import React from 'react'

const WorkProfilePP = (tCV) => {


    const datascienceArr = [
        "profilescientist0",
        "profilescientist1",
        "profilescientist2",
        "profilescientist3",
        "profilescientist4",
        "profilescientist5",
        "profilescientist6"
    ]
    const datascience = TransMultiPRM(tCV,"h3","subtitle","","pl-2 nospace",datascienceArr)
    
    const developerArr = [
        "profilesoftware0",
        "profilesoftware1",
        "profilesoftware2",
        "profilesoftware3",
        "profilesoftware4",
        "profilesoftware5",
        "profilesoftware6"
    ]
    const developer = TransMultiPRM(tCV,"h3","subtitle","","pl-2 nospace",developerArr)
    

    const profileArr=[
        developer,
        datascience
    ]
    
    const profile = TransMultiSection(tCV,"h2","subtitle","","pl-2 nospace","myprofile",profileArr)

    return (
        <>
            <span>{profile}</span>
        </>
    )
}

export default WorkProfilePP 
