import TransMultiPRM from '../../components/textProcessor/TransMultiPRM';

const Skills = (tCV) => {

    const skillsArr = [
        "skills0",
        "skills1",
        "skills2",
        "skills3",
        "skills4",
        "skills5"
      ]
      const skills = TransMultiPRM(tCV,"h2","subtitle","","pl-2 nospace",skillsArr)

    return (
        skills
    )
}

export default Skills
