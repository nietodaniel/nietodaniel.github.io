import BaseSection from './BaseSection'

const TriSplitSection = (className,leftContent,centerContent,rightContent,classSection1,classSection2,classSection3) => {
    const content = 
        TriSplitPanel(leftContent,centerContent,rightContent,classSection1,classSection2,classSection3)

    return (
        BaseSection(className,content)
    )
}

export default TriSplitSection;
