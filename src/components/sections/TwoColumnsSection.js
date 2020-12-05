import BaseSection from './BaseSection'
import TwoSplitPanel from '../panels/TwoSplitPanel'

const TwoColumnsSection = (className,leftContent,rightContent,firstColWidth) => {
    const content = TwoSplitPanel (leftContent,rightContent,firstColWidth)

    return (
        BaseSection(className,content)
    )
}

export default TwoColumnsSection;
