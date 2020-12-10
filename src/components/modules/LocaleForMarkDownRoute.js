import GetLocaleFromHead from './GetLocaleFromHead'

const LocaleForMarkDownRoute = (txt) => {

    const locale = GetLocaleFromHead()
    const newtxt = txt.replace(/LOCALESTRING/g, locale)
    console.log(newtxt)
    return (
        newtxt
    )
}

export default LocaleForMarkDownRoute;
