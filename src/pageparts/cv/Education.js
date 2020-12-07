import TransMultiPRM from '../../components/textProcessor/TransMultiPRM';

const Education = (tCV) => {

    const educationArr = [
        "education0",
        "education1",
        "education2",
        "education3",
        "education4"
      ]
      const education = TransMultiPRM(tCV,"h2","subtitle","","pl-2 nospace",educationArr)

    return (
        education
    )
}

export default Education
