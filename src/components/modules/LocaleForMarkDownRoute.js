import GetLocaleFromHead from './GetLocaleFromHead'

const LocaleForMarkDownRoute = (txt) => {

    const locale = GetLocaleFromHead()
    const newtxt = txt.replace(/LOCALESTRING/g, locale)

    return (
        newtxt
    )
}

export default LocaleForMarkDownRoute;
