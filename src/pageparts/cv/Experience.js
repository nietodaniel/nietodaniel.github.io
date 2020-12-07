import TransMultiPRM from '../../components/textProcessor/TransMultiPRM';
import TransMultiSection from '../../components/textProcessor/TransMultiSection';
import React from 'react'

const Experience = (tCV) => {


    const datascienceArr = [
        "datascience0",
        "datascience1",
        "datascience2",
        "datascience3",
        "datascience4"
    ]
    const datascience = TransMultiPRM(tCV,"h3","subtitle","","pl-2 nospace",datascienceArr)
    
    const developerArr = [
        "developer0",
        "developer1",
        "developer2"
    ]
    const developer = TransMultiPRM(tCV,"h3","subtitle","","pl-2 nospace",developerArr)
    
    
    const indepAnalystArr = [
        "indepAnalyst0",
        "indepAnalyst1",
        "indepAnalyst2"
    ]
    const indepAnalyst = TransMultiPRM(tCV,"h3","subtitle","","pl-2 nospace",indepAnalystArr)
    
    const indepSoftArr =[
        "indepSoft0",
        "indepSoft1",
        "indepSoft2",
        "indepSoft3"
    ]
    const indepSoft = TransMultiPRM(tCV,"h3","subtitle","","pl-2 nospace",indepSoftArr)

    const independentArr=[
        indepAnalyst,
        indepSoft,
      ]
      const experienceArr=[
        developer,
        datascience
      ]
    
    const independent = TransMultiSection(tCV,"h2","subtitle","","pl-2 nospace","independent0",independentArr)
    const experience = TransMultiSection(tCV,"h2","subtitle","","pl-2 nospace","experience0",experienceArr)

    return (
        <>
            <span>{experience}</span>
            <span>{independent}</span>
        </>
    )
}

export default Experience 
